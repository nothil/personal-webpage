import classNames from 'classnames';
import lottie from 'lottie-web';
import {FC, memo, useEffect, useRef} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

//Animation

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  const animationContainer = useRef(null);
  const anim = useRef<null | any>(null);

  useEffect(() => {
    if (animationContainer.current) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      anim.current = lottie.loadAnimation({
        container: animationContainer.current, // the dom element that will contain the animation

        loop: true,
        autoplay: true,
        animationData: require('../../images/lottie/developer.json'),
      });
    }
  }, []);
  return (
    <Section className="bg-gray-400" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
              <span ref={animationContainer} />
            </div>
          </div>
        )}
        <div className={classNames('col-span-1 flex flex-col gap-y-6 ', {'md:col-span-3': !!profileImageSrc})}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold">Why I am interested in SovTec Intern Programme</h2>
            <p className="prose prose-sm  sm:prose-base">{description}</p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-white" />}
                <span className="text-sm font-bold">{label}:</span>
                <span className=" text-sm">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
