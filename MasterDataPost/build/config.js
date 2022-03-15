"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const envFound = dotenv_1.default.config();
if (!envFound) {
    // This error should crash whole process
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}
exports.default = {
    /**
     * Your favorite port
     */
    port: parseInt(process.env.PORT, 10) || 3000,
    /**
     * That long string from mlab
     */
    databaseURL: process.env.MONGODB_URI || "mongodb+srv://lapr5g74:Lapr5g74@cluster0.6svxq.mongodb.net/masterdata_posts?retryWrites=true&w=majority",
    /**
     * Your secret sauce
     */
    jwtSecret: process.env.JWT_SECRET || "my sakdfho2390asjod$%jl)!sdjas0i secret",
    /**
     * Used by winston logger
     */
    logs: {
        level: process.env.LOG_LEVEL || 'info',
    },
    /**
     * API configs
     */
    api: {
        prefix: '/api',
    },
    controllers: {
        role: {
            name: "RoleController",
            path: "../controllers/roleController"
        },
        post: {
            name: "PostController",
            path: "../controllers/postController"
        },
        comment: {
            name: "CommentController",
            path: "../controllers/commentController"
        },
        reaction: {
            name: "ReactionController",
            path: "../controllers/reactionController"
        },
        relationStrength: {
            name: "RelationStrengthController",
            path: "../controllers/relationStrengthController"
        }
    },
    repos: {
        role: {
            name: "RoleRepo",
            path: "../repos/roleRepo"
        },
        user: {
            name: "UserRepo",
            path: "../repos/userRepo"
        },
        post: {
            name: "PostRepo",
            path: "../repos/postRepo"
        },
        comment: {
            name: "CommentRepo",
            path: "../repos/commentRepo"
        },
        reaction: {
            name: "ReactionRepo",
            path: "../repos/reactionRepo"
        }
    },
    services: {
        role: {
            name: "RoleService",
            path: "../services/roleService"
        },
        post: {
            name: "PostService",
            path: "../services/postService"
        },
        comment: {
            name: "CommentService",
            path: "../services/commentService"
        },
        reaction: {
            name: "ReactionService",
            path: "../services/reactionService"
        },
        relationStrength: {
            name: "RelationStrengthService",
            path: "../services/relationStrengthService"
        }
    },
};
//# sourceMappingURL=config.js.map