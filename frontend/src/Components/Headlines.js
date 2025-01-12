import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import Loader from "./Loader";
import NewsCard from "./NewsCard";

function Headlines() {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  function goToPreviousPage() {
    setCurrentPage(currentPage - 1);
  }

  function goToNextPage() {
    setCurrentPage(currentPage + 1);
  }

  const articlesPerPage = 6;

  useEffect(() => {
    setLoading(true);
    setFetchError(null);
    const categoryFilter = category ? `&category=${category}` : "";
    fetch(`https://news-aggregator-dusky.vercel.app/top-headlines?language=en${categoryFilter}&page=${currentPage}&pageSize=${articlesPerPage}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok');
      })
      .then((json) => {
        if (json.success) {
          setTotalArticles(json.data.totalResults);
          setArticles(json.data.articles);
        } else {
          setFetchError(json.message || 'An error occurred');
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setFetchError('Failed to fetch news. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentPage, category]);

  return (
    <>
      {fetchError && <div className="text-red-500 mb-4">{fetchError}</div>}
      <div className='my-10 cards grid lg:place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3 '>
        {!loading ? (
          articles.length > 0 ? (
            articles.map((article, index) => (
              <NewsCard
                key={index}
                title={article.title}
                description={article.description}
                imgUrl={article.urlToImage}
                publishedAt={article.publishedAt}
                url={article.url}
                author={article.author}
                source={article.source.name}
              />
            ))
          ) : (
            <p>No articles found for this category or criteria.</p>
          )
        ) : (
          <Loader />
        )}
      </div>
      {!loading && articles.length > 0 && (
        <div className="pagination flex justify-center gap-14 my-10 items-center">
          <button disabled={currentPage <= 1} className='pagination-btn' onClick={goToPreviousPage}>Prev</button>
          <p className='font-semibold opacity-80'>{currentPage} of {Math.ceil(totalArticles / articlesPerPage)}</p>
          <button className='pagination-btn' disabled={currentPage >= Math.ceil(totalArticles / articlesPerPage)} onClick={goToNextPage}>Next</button>
        </div>
      )}
    </>
  );
}

export default Headlines;
