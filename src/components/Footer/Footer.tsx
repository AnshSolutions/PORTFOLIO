import {ThemeContext} from 'providers/theme/ThemeContex';
import {ThemeContextInterface} from 'providers/theme/types';

import {Suspense, lazy, useContext, useState} from 'react';
import {createPortal} from 'react-dom';
import {MdOutlineDarkMode} from 'react-icons/md';
import {socialNetworks} from 'screens/contact/utils';

const ThemeDialog = lazy(() => import('../../components/ThemeDialog/ThemeDialog'));

export const Footer = ({mobileAndTablet}: {mobileAndTablet: boolean}) => {
  const {theme} = useContext(ThemeContext) as ThemeContextInterface;

  const [themeDialogOpen, setThemeDialogOpen] = useState<boolean>(false);

  const sidebarContentEl = document.getElementsByClassName('main-window')[0];

  return (
    <div className="relative flex h-[48px] w-full flex-row justify-between bg-themePrimaryColor xl:h-[24px] xl:justify-end">
      {mobileAndTablet && (
        <div className="flex flex-row gap-2 pl-2">{socialNetworks(24, true).map((item) => item)}</div>
      )}
      {/* If mobileAndTablet is true, it renders social network icons. 
      The socialNetworks function returns an array of icons with specified size and a boolean flag. */}

      {themeDialogOpen &&
        createPortal(
          <Suspense>
            <ThemeDialog setThemeDialogOpen={setThemeDialogOpen} />
          </Suspense>,
          sidebarContentEl
        )}
          {/* If themeDialogOpen is true,
           it renders the ThemeDialog component inside a Suspense wrapper to handle the lazy loading.
           createPortal is used to render ThemeDialog in the sidebarContentEl element, 
           which allows it to be rendered outside the main DOM hierarchy. */}
      <div
        onClick={() => setThemeDialogOpen(!themeDialogOpen)}
        className="flex h-full flex-row items-center justify-end px-2 hover:cursor-pointer"
      >
        {/* This div acts as a button that toggles the themeDialogOpen state when clicked. */}
        <MdOutlineDarkMode className="pr-1 text-xl text-bgColor" />
        <span className="font-bold text-bgColor">{theme}</span>
        {/* It contains the dark mode icon (MdOutlineDarkMode) and a s
        pan displaying the current theme, both styled with Tailwind CSS classes. */}
      </div>
    </div>
  );
};
