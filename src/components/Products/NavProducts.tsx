import LinkButton from "../Shared/LinkButton";
import styles from "../Styles/LinkButton.module.css";

export default function NavProducts() {
  return (
    <div>
      <div className="bg-black text-white py-8">
        <h2 className="text-3xl font-bold mb-6 text-left px-5">OUR PRODUCTS</h2>
        <div className="grid grid-cols-5 px-4 gap-4 max-[1585px]:grid-cols-4 max-[1255px]:grid-cols-3 max-[941px]:grid-cols-2 max-[646px]:grid-cols-1">
          <LinkButton
            link="#SocialMedia"
            className={`${styles.LinkButton} ${styles.SocialMedia}`}
            name="SOCIAL MEDIA"
          />
          <LinkButton
            link="#Design"
            className={`${styles.LinkButton} ${styles.Design}`}
            name="DESING"
          />

          <LinkButton
            link="#ITServices"
            className={`${styles.LinkButton} ${styles.ItServices}`}
            name="IT SERVICES"
          />
          <LinkButton
            link="#CDIPackages"
            className={`${styles.LinkButton} ${styles.CDIPackages}`}
            name="CDI PACKAGES"
          />
        </div>
      </div>
    </div>
  );
}
