import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Cursor() {
    useEffect(() => {
        const cursor: any = document.querySelector("#cursor")
        document.addEventListener('mousemove', moveCursor)
        document.addEventListener("mouseout", () => {
            cursor.style.display = "none"
        })

        function moveCursor(a: any) {
            const x = a.clientX;
            const y = a.clientY

            cursor.style.display = "block"
            cursor.style.left = `${x}px`
            cursor.style.top = `${y}px`
        }

        function refreshLinks() {
            const links = Array.from(document.querySelectorAll("a"))
            for(const link of links) {
                link.addEventListener("mouseover", () => {
                    cursor.classList.add("largeCursor")
                })

                link.addEventListener("mouseleave", () => {
                    cursor.classList.remove("largeCursor")
                })
            }
        }
        refreshLinks();
        

    })
    return (
        <div id="cursor" className="fixed w-[15px] h-[15px] bg-white mix-blend-difference rounded-full hidden"></div>
    )
}