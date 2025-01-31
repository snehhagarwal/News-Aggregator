import mongoose from "mongoose";
const reporterSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    default: "xyz",
  },
  name: {
    type: String,
    required: true,
  },
  nonApprovedNews: {
    type: [Object],
    default: [],
  },
  approvedNews: {
    type: [Object],
    default: [],
  },
  nonApproveVideo: {
    type: [Object],
    default: [],
  },
  approvedVideo: {
    type: [Object],
    default: [],
  },
});

const administratorSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    default: "xyz",
  },
  name: {
    type: String,
    required: true,
  },
  nonApprovedNews: {
    type: [Object],
    default: [],
  },
  nonApprovedNewsVid: {
    type: [Object],
    default: [],
  },
  approvedNews: {
    type: [Object],
    default: [],
  },
  approvedNewsVid: {
    type: [Object],
    default: [],
  },
  reporters: {
    type: [Object],
    default: [],
  },
  allReportsOnNews: {
    type: [Object],
    default: [],
  },
});

const newsSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "news",
  },
  administrator: {
    type: [administratorSchema],
    default: [],
  },
  reporters: {
    type: [reporterSchema],
    default: [],
  },
  reporters: {
    type: [reporterSchema],
    default: [],
  },
  approvedNews: {
    type: [Object],
    default: [],
  },
});
const News = mongoose.model("News", newsSchema);
export default News;
