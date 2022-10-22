import NextAuth from 'next-auth'
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  //configure one or more authentication Providers
  providers:[
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      secret:process.env.SECRET,
       synchronize: false
    }),
    //...add providers here
  ],
    secret: process.env.SECRET,
});
