
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import "./header.css";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  return (
    <div className="header">
      <div className="headerNav">
        <div className="headerItem">
          <ul>
            <li>
              <a href="#" className="headerNavItem">
                {t('header.teacher')}
              </a>
            </li>
            <li>
              <a href="#" className="headerNavItem">
              {t('header.parent')}
              </a>
            </li>
            <li>
              <a href="#" className="headerNavItem">
              {t('header.pupil')}
              </a>
            </li>
            <li className="headerNavItem">{t('header.site')}</li>
          </ul>
        </div>
        <div className="socialItems">
          <a href="https://www.facebook.com/groups/559710978340077/?ref=share&mibextid=NSMWBT" target="_blank">
            <FaFacebookF className="socialItem1"/>
          </a>
          <a href="https://www.facebook.com/groups/559710978340077/?ref=share&mibextid=NSMWBT">
            <FaInstagram className="socialItem2" />
          </a>
          <a href="https://www.facebook.com/groups/559710978340077/?ref=share&mibextid=NSMWBT" target="_blank">
            <FaTelegramPlane className="socialItem3" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
