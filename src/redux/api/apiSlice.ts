import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ["comments"],
    endpoints: (builder) => ({
        
    }),
});

export const { useGetProductsQuery, useSingleProductQuery, usePostCommentMutation, useGetCommentsQuery } = api;
