import { useEffect } from 'react';

const Navigation = () => {

  const navObj = {
    section1: {
        label: 'section 1',
        options: {
            main: {
                label: 'main'
            },
            contact: {
                label: 'contact'
            }
        },
        meta: Object.freeze({
          writable: false,
          type: 'nav'
        })
    },
    section2: {
        label: 'section 2',
        options: {
            option2: {
                label: 'option 2'
            },
            option3: {
                label: 'option 3'
            }
        },
        meta: Object.freeze({
          writable: false,
          type: 'nav'
        })
    },
  }

  const navTopLvlValues = Object.values(navObj).map(section => {
    return [section.label];
  })

  const navSecondLvlValues = Object.values(navObj).map(section => {
    return Object.values(section.options).map(option => option.label)
  })

  useEffect(() => {
    // todo - rm
    console.log('navObj', {
      navObj,
      topLvlKeys: Object.keys(navObj),
      topLvlValues: Object.values(navObj).map(section => {
        return [section.label];
      }),
      // secondLvlValues: Object.values(navObj).map(section => {
      //   const options = Object.values(section.options).map(option => option.label);
      //   return [...options];
      // }),
      secondLvlValues: Object.values(navObj).map(section => {
        return Object.values(section.options).map(option => option.label)
      }),
      navTopLvlValues,
      navSecondLvlValues
    })
  }, [])

  return (
    <div className="nav-wrapper flex">
      {
        navTopLvlValues && (
          Object.values(navObj).map((section, i) => {
            return (
              <div className="" key={`${section.label}-${i}`}>
                <div>{[section.label]}</div>
                {
                  Object.values(section.options).map(option => {
                    return (
                      <div>
                        <div>{option.label}</div>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        )
      }
    </div>
  );
};

export default Navigation;
