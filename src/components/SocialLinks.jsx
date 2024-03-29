import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import devpostIcon from "../assets/devpostIcon.webp";
import { Image } from "@chakra-ui/react";
import "./SocialLinks.css";


const SocialLinks = () => {
  return (
    <div className="socialContainer">
      <a
        href="https://www.instagram.com/siu_ehacks/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://github.com/siueehacks">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://ehacks-2023.devpost.com/">
        <Image src={devpostIcon} alt="Devpost Icon" h="2em" w="2em"/>
      </a>
    </div>
  );
};

export default SocialLinks;
