import CredentialsProvider from "next-auth/providers/credentials";
const authOptions: any = {
  callbacks: {
    async signIn({ user, account }: any) {
      return { user, account };
    },
  },
  session: {
    maxAge: 2 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter Email" },
        password: { label: "Password", type: "password" },
        id: { label: "id", type: "number" },
        role: { label: "role", type: "number" },
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
