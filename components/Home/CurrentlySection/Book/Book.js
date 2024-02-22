import React from "react";
import styles from "./Book.module.css";
import Image from "next/image";
import Link from "next/link";

const Book = ({ googlebooksData }) => {
  return (
    <section className={styles.sectionMain}>
      <Image
        src={
          googlebooksData[0].volumeInfo?.imageLinks.includes("undefined")
            ? "https://images.prismic.io/miscellaneous/19256360-b1fd-453f-82d8-9331f2b276e4_airtelBackdrop.png"
            : googlebooksData[0].volumeInfo?.imageLinks
        }
        width={400}
        height={200}
        alt="Poster"
      />
      <div className={`${styles.container} ${styles.sectionWrapper}`}>
        <div className={styles.sectionPartOne}>
          <Image
            src={
              googlebooksData[0].volumeInfo?.imageLinks.includes("undefined")
                ? "https://images.prismic.io/miscellaneous/f7b03c31-312d-4a42-8fc6-3a7fad309af1_airtel.png"
                : googlebooksData[0].volumeInfo?.imageLinks
            }
            width={175}
            height={250}
            alt="Poster"
          />
          <div className={styles.sectionInfo}>
            <p className={styles.last}>{"Currently reading: "}</p>
            <p className={styles.title}>
              {googlebooksData[0].volumeInfo?.title}
            </p>
            <div className={styles.info}>
              <span className={styles.contentRating}>
                {googlebooksData[0].volumeInfo?.printType}
              </span>
              <span className={styles.country}>
                {" "}
                &bull; {googlebooksData[0].volumeInfo?.publishedDate}
              </span>
              <span className={styles.genre}>
                {" "}
                &bull;{" "}
                {googlebooksData[0].volumeInfo?.categories?.map((categorie) => {
                  return `${categorie}, `;
                })}
              </span>
            </div>
            <p className={styles.director}>
              by "
              {googlebooksData[0].volumeInfo?.authors?.map((author) => {
                return `${author}, `;
              })}
              "
            </p>
            <textarea
              className={styles.summary}
              value={googlebooksData[0].volumeInfo?.description}
              readOnly
            ></textarea>
          </div>
        </div>
        <div className={styles.sectionPartTwo}>
          <div className={styles.sectionTwoInfo}>
            <p className={styles.dailyMuse}>Wanna see more of my daily muse?</p>
            <p className={styles.otherLinks}>
              Recently watched{" "}
              <Link href={"/"}>
                <span>Movies</span>
              </Link>{" "}
              📚 [WIP]
            </p>
            <p className={styles.otherLinks}>
              Recently watched{" "}
              <Link href={"/"}>
                <span>TV Shows</span>
              </Link>{" "}
              🎬 [WIP]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
