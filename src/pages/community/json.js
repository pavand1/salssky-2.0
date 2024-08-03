export const response = {
    _id: "1234567890abcdef",
    title: "Book 1",
    author: "Author 1",
    likes: {
        _id: "0987654321fedcba",
        name: "User 1",
        email: "user1@example.com",
    },
    comments: [
        {
            _id: "abcdefghij012345",
            content: "Comment 1",
            customers: {
                _id: "0987654321fedcba",
                name: "User 1",
                email: "user1@example.com",
            },
            likes: {
                _id: "fedcba9876543210",
                name: "User 2",
                email: "user2@example.com",
            },
            replies: [
                {
                    _id: "fedcba9876543210",
                    content: "Reply 1",
                    customers: {
                        _id: "fedcba9876543210",
                        name: "User 2",
                        email: "user2@example.com",
                    },
                    likes: {
                        _id: "0123456789abcdef",
                        name: "User 3",
                        email: "user3@example.com",
                    },
                },
            ],
        },
        {
            _id: "fedcba9876543210",
            content: "Comment 2",
            customers: {
                _id: "0123456789abcdef",
                name: "User 3",
                email: "user3@example.com",
            },
            likes: {
                _id: "0987654321fedcba",
                name: "User 1",
                email: "user1@example.com",
            },
            replies: [],
        },
    ],
};
