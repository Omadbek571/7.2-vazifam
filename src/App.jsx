import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from "../src/imges/logo.png";
import search from "../src/imges/search.png";
import iPhone from "../src/imges/iPhone.png";
import map from "../src/imges/map.png";

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState("light"); 

  function handleChange(event) {
    setLang(event.target.value);
  }

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <div className={`min-h-screen container mx-auto rounded-lg ${theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-gray-200'}`}>
      <header className="border-b-2 p-5 shadow-md">
        <nav className="flex justify-between items-center">
          <a href="#"><img src={logo} alt="Logo" className="" /></a>

          <ul className="flex gap-5 font-bold items-center">
            <li>
              <a href="#" className={`hover:text-blue-500 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>{t('Assets')}</a>
            </li>
            <li>
              <a href="#" className={`hover:text-blue-500 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>{t('Creators')}</a>
            </li>
            <li>
              <a href="#" className={`hover:text-blue-500 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>{t('Careers')}</a>
            </li>
            <li>
              <a href="#" className={`hover:text-blue-500 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>{t('GoPro')}</a>
            </li>

            <li className={`border-2 flex items-center p-2 gap-2 rounded-2xl ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
              <img src={search} alt="Search Icon" className="h-5 w-5" />
              <input type="text" placeholder={t('Search')} className={`bg-transparent focus:outline-none ${theme === 'light' ? 'text-gray-900' : 'text-gray-200'}`} />
            </li>
            <li>
              <a href="#" className={`hover:text-blue-500 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>{t('Login')}</a>
            </li>
            <li>
              <a href="#" className="bg-blue-700 text-white px-4 py-2 rounded-xl hover:bg-blue-600">
                {t('Signup')}
              </a>
            </li>
          </ul>

          <select
            onChange={handleChange}
            value={lang}
            className={`text-white rounded-2xl p-2 focus:outline-none ${theme === 'light' ? 'bg-gray-600' : 'bg-gray-800'}`}
          >
            <option value="uz">uz</option>
            <option value="ru">ru</option>
            <option value="en">en</option>
          </select>

          <button onClick={toggleTheme} className={`ml-4 p-2 rounded ${theme === 'light' ? 'bg-gray-200 text-gray-900' : 'bg-gray-700 text-gray-200'}`}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </nav>
      </header>

      <main className='p-8 max-w-6xl mx-auto mt-5 rounded-3xl flex items-center justify-between'>
        <div>
          <p className='text-sm mb-[19px]'>{t("A SECURITY SOLUTION")}</p>
          <p className='font-black text-[46px] mb-[25px] max-w-[540px]'>{t("Keep track of your loved ones in real time!")}</p>

          <div className='flex gap-5'>
            <img src={map} alt="" />
            <p className='max-w-[350px] font-medium'>{t("We noticed the high level of insecurity in the world, and we thought of how technology could be used to combat these insecurities.")}</p>
          </div>

          <p className='font-medium text-[40px]'>{t("Join Our Waitlist!")}</p>
          <p className='font-medium mb-[33px]'>{t("Be the first to get notified when the product is ready!")}</p>

          <div className={`py-3 px-10 gap-4 flex max-w-96 rounded-3xl ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
            <input type="text" placeholder={t("Your email address")} className='bg-transparent focus:outline-none' />
            <button className='py-2 px-5 text-white rounded-3xl bg-blue-600'>{t("Join List!")}</button>
          </div>
        </div>

        <div>
          <img src={iPhone} alt="" />
        </div>
      </main>
    </div>
  );
}

export default App;
