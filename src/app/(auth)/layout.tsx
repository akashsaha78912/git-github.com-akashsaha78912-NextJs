"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import "./style.css"
const navlinks=[
    { name:"Login",href:"/login"
    },
    { name:"Register",href:"/register"
    },
    { name:"Forgot Password",href:"/forgotpassword"
    }
]


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const pathname = usePathname();
  return (
   <>
     {navlinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={
              isActive
                ? "bg-red-500 text-white font-bold"
                : "text-gray-700 hover:bg-gray-200"
            }
          > 
            {link.name}
          </Link>
        );
      })} 
      {children}
   </>
  )
}
