import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github'
import DiscordProvider from "next-auth/providers/discord";

export default NextAuth({
 providers: [
  GithubProvider({
   clientId: process.env.GITHUB_ID,
   clientSecret: process.env.GITHUB_SECRET,
  }),
  DiscordProvider({
   clientId: process.env.DISCORD_CLIENT_ID,
   clientSecret: process.env.DISCORD_CLIENT_SECRET,
   authorization: "https://discord.com/api/oauth2/authorize?scope=identify+email+guilds",
 })
 ],
 secret: process.env.SECRET,
 callbacks: {
  session({ session, token, user }) {
    return session
  },
},
})