import React, { useLayoutEffect } from 'react'
import gsap from "gsap";
import './subscribe.scss';

import { useViewportScroll, useTransform, motion, useAnimation, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const boxVariants = {
    hidden: {

    },
    visible: {

        transition: {

            delay: 1,
            when: "beforeChildern",
            staggerChildren: 0.2

        }
    }
}
const childVariants = {
    hidden: {
        opacity: 0,
        x: -20,
        y: 20,
    },
    visible: {

        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 0.5,
            // ease: "easeOut",
            // type: "spring",
            // damping: 10,
            // mass: 0.1,
            // stiffness: 100


        }

    }
}


export default function Subscribe() {

    React.useEffect(() => {
        const { to, fromTo, set } = gsap

        function validateEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return re.test(String(email).toLowerCase())
        }

        document.querySelectorAll('.newsletter-form').forEach(form => {

            let input = form.querySelector('input'),
                button = form.querySelector('button'),
                getVar = variable => getComputedStyle(button).getPropertyValue(variable)

            input.addEventListener('input', e => {
                console.log("input")
                form.classList.toggle('valid', validateEmail(input.value))
            })

            form.addEventListener('submit', e => {
                e.preventDefault()
                console.log('submit')

                if (!validateEmail(input.value)) {
                    input.focus()
                    return
                }

                if (!button.classList.contains('active')) {

                    button.classList.add('active')

                    to(button, {
                        keyframes: [{
                            '--left-wing-first-x': '50%',
                            '--left-wing-first-y': '100%',
                            '--right-wing-second-x': '50%',
                            '--right-wing-second-y': '100%',
                            duration: .2,
                            onComplete() {
                                set(button, {
                                    '--left-wing-first-y': '0%',
                                    '--left-wing-second-x': '40%',
                                    '--left-wing-second-y': '100%',
                                    '--left-wing-third-x': '0%',
                                    '--left-wing-third-y': '100%',
                                    '--left-body-third-x': '40%',
                                    '--right-wing-first-x': '50%',
                                    '--right-wing-first-y': '0%',
                                    '--right-wing-second-x': '60%',
                                    '--right-wing-second-y': '100%',
                                    '--right-wing-third-x': '100%',
                                    '--right-wing-third-y': '100%',
                                    '--right-body-third-x': '60%'
                                })
                            }
                        }, {
                            '--left-wing-third-x': '20%',
                            '--left-wing-third-y': '90%',
                            '--left-wing-second-y': '90%',
                            '--left-body-third-y': '90%',
                            '--right-wing-third-x': '80%',
                            '--right-wing-third-y': '90%',
                            '--right-body-third-y': '90%',
                            '--right-wing-second-y': '90%',
                            duration: .2
                        }, {
                            '--rotate': '50deg',
                            '--left-wing-third-y': '95%',
                            '--left-wing-third-x': '27%',
                            '--right-body-third-x': '45%',
                            '--right-wing-second-x': '45%',
                            '--right-wing-third-x': '60%',
                            '--right-wing-third-y': '83%',
                            duration: .25
                        }, {
                            '--rotate': '60deg',
                            '--plane-x': '-8px',
                            '--plane-y': '40px',
                            duration: .2
                        }, {
                            '--rotate': '40deg',
                            '--plane-x': '45px',
                            '--plane-y': '-300px',
                            '--plane-opacity': 0,
                            duration: .375,
                            onComplete() {
                                setTimeout(() => {
                                    button.removeAttribute('style')
                                    fromTo(button, {
                                        opacity: 0,
                                        y: -8
                                    }, {
                                        opacity: 1,
                                        y: 0,
                                        clearProps: true,
                                        duration: .3,
                                        onComplete() {
                                            button.classList.remove('active')
                                        }
                                    })
                                }, 2500)
                            }
                        }]
                    })

                    to(button, {
                        keyframes: [{
                            '--text-opacity': 0,
                            '--border-radius': '0px',
                            '--left-wing-background': getVar('--primary-dark'),
                            '--right-wing-background': getVar('--primary-dark'),
                            duration: .1
                        }, {
                            '--left-wing-background': getVar('--primary'),
                            '--right-wing-background': getVar('--primary'),
                            duration: .15
                        }, {
                            '--left-body-background': getVar('--primary-dark'),
                            '--right-body-background': getVar('--primary-darkest'),
                            duration: .25,
                            delay: .1
                        }, {
                            '--trails-stroke': '171px',
                            duration: .22,
                            delay: .22
                        }, {
                            '--success-opacity': 1,
                            '--success-x': '0px',
                            duration: .2,
                            delay: .15
                        }, {
                            '--success-stroke': '0px',
                            duration: .15
                        }]
                    })

                }

            })

        })
    });
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useLayoutEffect(() => {
        if (inView) {
            controls.start("visible");
        }

    }, [controls, inView]);

    return (
        <motion.div className="subscribeContainer"
            ref={ref}
            initial="hidden"
            animate="visible"
            variants={childVariants}
        >
            {/*             

            <input placeholder="E-mail" className="subscribeEmail">
            </input>
            <HiOutlineMail className="subscribeIcon" />

            <button className="subscribeBtn">Subscribe Now</button> */}

            <form class="newsletter-form">
                <motion.input type="email" placeholder="Email address"
                    variants={childVariants}
                /
                >
                <motion.button variants={childVariants}>
                    <span class="default">Subscribe</span>

                    <span class="success">
                        <svg viewBox="0 0 16 16">
                            <polyline points="3.75 9 7 12 13 5"></polyline>
                        </svg> subscribed
                    </span>

                    <svg class="trails" viewBox="0 0 33 64">
                        <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
                        <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
                    </svg>

                    <div class="plane">
                        <div class="left"

                        ></div>
                        <div class="right"

                        ></div>
                    </div>

                </motion.button>
            </form>

        </motion.div>
    )


}


