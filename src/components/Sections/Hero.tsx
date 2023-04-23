import {ChevronDownIcon} from '@heroicons/react/outline';
import classNames from 'classnames';
import lottie from 'lottie-web';
import Image from 'next/image';
import {FC, memo, useEffect, useRef} from 'react';

import {aboutData, heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions} = heroData;
  const {profileImageSrc} = aboutData;

  const animationContainer = useRef(null);
  const anim = useRef<null | any>(null);

  useEffect(() => {
    if (animationContainer.current) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      anim.current = lottie.loadAnimation({
        container: animationContainer.current, // the dom element that will contain the animation

        loop: true,
        autoplay: true,
        animationData: require('../../images/lottie/development.json'),
      });
    }
  }, []);

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-screen items-center justify-center">
        <Image
          alt={`${name}-image`}
          className="absolute z-0"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="z-10  max-w-screen-md px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-400 p-6 text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-5xl">{name}</h1>
            {description}
            <div className="flex gap-x-4 text-neutral-100">
              <Socials />
            </div>
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
            {!!profileImageSrc && (
              <div className="col-span-2 flex justify-center lg:justify-start">
                <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-60">
                  <span ref={animationContainer} />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
