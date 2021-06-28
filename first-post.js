import Link from "next/link";
import Head from "next/head";
import Layout from "./pages/posts/components/Layout";

const FirstPost = () => {
    return(
        <Layout>
            <Head>
                <title>
                    My First Next Js Post
                </title>
            </Head>
            <h1>Here is my first post</h1>
            <h2>
                <Link href='/'>
                <a>Back to Home</a>
                </Link>
            </h2>
        </Layout>
    )
}

export default FirstPost;