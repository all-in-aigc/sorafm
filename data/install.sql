CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    nickname VARCHAR(50),
    avatar_url VARCHAR(255),
    created_at timestamptz,
    uuid UUID UNIQUE NOT NULL
);

CREATE TABLE videos (
    id SERIAL PRIMARY KEY,
    user_uuid VARCHAR(255) NOT NULL,
    video_description TEXT,
    video_url VARCHAR(255),
    cover_url VARCHAR(255),
    post_url VARCHAR(255),
    user_nickname VARCHAR(50),
    user_avatar_url VARCHAR(255),
    created_at timestamptz,
    uuid UUID UNIQUE NOT NULL,
    status INT,
    is_recommended BOOLEAN
);