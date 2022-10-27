import { Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home = () => {

  return (
    <>
      <Head>
        <title>Willem Portfolio</title>
        <meta name="title_description" content="Portfolio website for Willem Swanepoel" />
      </Head>
      <main>
        <Typography variant="h1">
          Link To <Link href="/temp/temp">temp/temp</Link>
        </Typography>

        <Image
          src="/images/profile.jpeg"
          height={144}
          width={144}
          alt="temp picture"
        />
      </main>
    </>
  );
};

export default Home;

// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import styles from '../styles/Home.module.css';

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Willem Portfolio</title>
//         <meta name="description" content="Portfolio website for Willem Swanepoel" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <Link href="/temp/temp">Next.js!</Link>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h2>Documentation &rarr;</h2>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h2>Learn &rarr;</h2>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/canary/examples"
//             className={styles.card}
//           >
//             <h2>Examples &rarr;</h2>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.card}
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>


//     </div>
//   );
// }
