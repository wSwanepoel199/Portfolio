import Head from "next/head";
import Link from "next/link";

const TestComponent = () => {

  return (
    <>
      <Head>
        <title>temp file</title>
      </Head>
      <h1>
        Test Route
      </h1>
      <h2>
        <Link href="/">Return Home</Link>
      </h2>
    </>
  );
};

export default TestComponent;