import expressLoader from './express';
import dependencyInjectorLoader from './dependencyInjector';
import mongooseLoader from './mongoose';
import Logger from './logger';

import config from '../../config';

export default async ({ expressApp }) => {
    const mongoConnection = await mongooseLoader();
    Logger.info('✌️ DB loaded and connected!');

    const userSchema = {
        // compare with the approach followed in repos and services
        name: 'userSchema',
        schema: '../persistence/schemas/userSchema',
    };

    const roleSchema = {
        // compare with the approach followed in repos and services
        name: 'roleSchema',
        schema: '../persistence/schemas/roleSchema',
    };

    const postSchema = {
        // compare with the approach followed in repos and services
        name: 'postSchema',
        schema: '../persistence/schemas/postSchema',
    };

    const commentSchema = {
        // compare with the approach followed in repos and services
        name: 'commentSchema',
        schema: '../persistence/schemas/commentSchema',
    };

    const reactionSchema = {
        // compare with the approach followed in repos and services
        name: 'reactionSchema',
        schema: '../persistence/schemas/reactionSchema',
    };

    const roleController = {
        name: config.controllers.role.name,
        path: config.controllers.role.path
    }

    const postController = {
        name: config.controllers.post.name,
        path: config.controllers.post.path
    }

    const commentController = {
        name: config.controllers.comment.name,
        path: config.controllers.comment.path
    }

    const reactionController = {
        name: config.controllers.reaction.name,
        path: config.controllers.reaction.path
    }

    const relationStrengthController = {
        name: config.controllers.relationStrength.name,
        path: config.controllers.relationStrength.path
    }

    const roleRepo = {
        name: config.repos.role.name,
        path: config.repos.role.path
    }

    const reactionRepo = {
        name: config.repos.reaction.name,
        path: config.repos.reaction.path
    }

    const postRepo = {
        name: config.repos.post.name,
        path: config.repos.post.path
    }

    const commentRepo = {
        name: config.repos.comment.name,
        path: config.repos.comment.path
    }

    const userRepo = {
        name: config.repos.user.name,
        path: config.repos.user.path
    }

    const roleService = {
        name: config.services.role.name,
        path: config.services.role.path
    }

    const relationStrengthService = {
        name: config.services.relationStrength.name,
        path: config.services.relationStrength.path
    }

    const postService = {
        name: config.services.post.name,
        path: config.services.post.path
    }

    const commentService = {
        name: config.services.comment.name,
        path: config.services.comment.path
    }

    const reactionService = {
        name: config.services.reaction.name,
        path: config.services.reaction.path
    }

    await dependencyInjectorLoader({
        mongoConnection,
        schemas: [
            userSchema,
            roleSchema,
            postSchema,
            commentSchema,
            reactionSchema
        ],
        controllers: [
            roleController,
            postController,
            commentController,
            reactionController,
            relationStrengthController
        ],
        repos: [
            roleRepo,
            userRepo,
            postRepo,
            commentRepo,
            reactionRepo
        ],
        services: [
            roleService,
            postService,
            commentService,
            reactionService,
            relationStrengthService

        ]
    });
    Logger.info('✌️ Schemas, Controllers, Repositories, Services, etc. loaded');

    await expressLoader({ app: expressApp });
    Logger.info('✌️ Express loaded');
};
