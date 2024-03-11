import CredentialsProvider from "next-auth/providers/credentials";
const authOptions: any = {
  callbacks: {
    async signIn({ user, account }: any) {
      return { user, account };
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        try {
          const user = await credentials;
          return user;
        } catch (error) {
          return { message: "Invalid credentials" };
        }
      },
    }),
  ],

  secret: "https://rollie-alpha.vercel.app/",
};

export default authOptions;
