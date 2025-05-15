"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const mongoose_1 = require("mongoose");
// Mongoose Schema
const projectSchema = new mongoose_1.Schema({
    _id: {
        type: String,
        required: [true, '_id is required'],
    },
    images: {
        type: [String],
        required: [true, 'Images are required'],
    },
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    coreFeature: {
        type: [String],
        required: [true, 'Core features are required'],
    },
    technology: {
        type: [String],
        required: [true, 'Technologies are required'],
    },
    projectChallengeFace: {
        type: String,
        required: [true, 'Project challenge faced is required'],
    },
    liveLink: {
        type: String,
        required: [true, 'Live link is required'],
    },
    githubClient: {
        type: String,
        required: [true, 'GitHub client link is required'],
    },
    githubServer: {
        type: String,
        required: [true, 'GitHub server link is required'],
    },
    projectFeaturePlane: {
        type: String,
        required: [true, 'Project future plan is required'],
    },
}, {
    timestamps: true,
});
exports.Project = (0, mongoose_1.model)('Project', projectSchema);
