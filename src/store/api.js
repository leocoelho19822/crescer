import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    //baseUrl: "http://localhost:5008/api", 
    baseUrl: "https://apicrescer.craveirocoelho.pt/api", 
    credentials: "include", 
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
      }),
    }),

    register: builder.mutation({
      query: (userData) => ({
        url: "/users/register",
        method: "POST",
        body: userData,
      }),
    }),

    getProfile: builder.query({
      query: () => ({
        url: "/users/profile",
        method: "GET", // O token será enviado automaticamente via cookie
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: "/users/logout",
        method: "POST", // Chama o backend para remover o cookie
      }),
    }),

    resetPassword: builder.mutation({
      query: ({ token, password }) => ({
        url: `/users/reset-password`,
        method: "POST",
        body: { token, password },
      }),
    }),

    verifyEmail: builder.mutation({
      query: (token) => ({
        url: `users/verify-email/${token}`,
        method: "GET",
      }),
    }),

    sendResetPassword: builder.mutation({
      query: (body) => ({
        url: "/users/send-reset-email",
        method: "POST",
        body,
      }),
    }),

    getArticleById: builder.query({
      query: (id) => ({
        url: `/articles/${id}`,
        method: "GET",
      }),
    }),

  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetProfileQuery,
  useLogoutMutation, // Exportamos a nova mutation para logout
  useSendResetPasswordMutation,
  useResetPasswordMutation,
  useVerifyEmailMutation,
  useGetArticleByIdQuery,
} = api;
