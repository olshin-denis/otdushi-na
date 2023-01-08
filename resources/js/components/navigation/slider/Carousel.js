import classes from "./slider.module.scss";
import React, {Children, cloneElement, useEffect, useMemo, useState} from "react";

const Page_Width = 100
const Transition_duration = 300

export const Carousel = ({children, infinite}) => {
    const [pages, setPages] = useState([])
    const [leftX, setLeftX] = useState(0)
    const [transitionDuration, setTransitionDuration] = useState(Transition_duration)
    const [clonesCount, setClonesCount] = useState({head: 0, tail: 0})

    useEffect(() => {
        newScrolling()
    }, [children])

    useEffect(() => {
            setLeftX(-(clonesCount.head) * Page_Width)
        // console.log(pages)
    }, [clonesCount])

    useEffect(() => {
        transition()
        // console.log(leftX)
    }, [leftX])

    useEffect(() => {
        if (transitionDuration === 0) {
            setTimeout(() => {
                setTransitionDuration(Transition_duration)
            }, 100)
        }
    }, [transitionDuration])

    const newScrolling = () => {
        if (children) {
            setPages([
                cloneElement(children[Children.count(children) - 1],{
                    key:"pev1"
                }),
                ...children,
                cloneElement(children[0], {
                    key:"next1"
                })
            ])
            setClonesCount({head: 1, tail: 1})
        }else {
            setPages(children)
        }
    }

    const transition = () => {
        // if (!infinite) return

        if (leftX === 0) {
            setTimeout(() => {
                setTransitionDuration(0)
                let x = -(Page_Width * (pages.length - 1 - (clonesCount.tail)))
                // console.log(x)
                setLeftX(x)
            }, transitionDuration);
        }
        if (leftX === -(Page_Width * (pages.length - 1))) {
            setTimeout(() => {
                setTransitionDuration(0)
                setLeftX(-(Page_Width * (clonesCount.head)))
            }, transitionDuration);
        }
    }

    const leftClick = () => {
        let x = leftX + Page_Width
        setLeftX(x)
    }

    const rightClick = () => {
        let x = leftX - Page_Width
        setLeftX(x)
    }

    return (
        <div className={classes.camera} style={{display: "flex", justifyContent: "center"}}>
            <div className={classes.gridFlex}>
                <a className={`${classes.before}`} onClick={leftClick}>&#10094;</a>
            </div>
            <div className={`${classes.main_container}`}>
                <div className={`${classes.window}`}>
                    <div
                        style={{transitionDuration: `${transitionDuration}ms`, transform: `translateX(${leftX}%)`}}
                        className={`${classes.all_pages_container}`}
                    >
                        {pages}
                    </div>
                </div>
            </div>
            <div className={classes.gridFlex}>
                <a className={`${classes.after}`} onClick={rightClick}>&#10095;</a>
            </div>
        </div>

    )
}
