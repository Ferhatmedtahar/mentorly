// // import { Button } from "@/components/ui/button";
// // import { PlusCircle, User } from "lucide-react";
// // import Link from "next/link";
// // import { ModeToggle } from "../ui/ModeToggle";

// // const Navbar = () => {
// //   return (
// //     <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
// //       <div className="container flex h-16 items-center justify-between mx-auto">
// //         <div className="flex items-center gap-2">
// //           <Link href="/" className="flex items-center space-x-2">
// //             <span className="text-xl font-bold gradient">{"<Mentorly>"}</span>
// //           </Link>
// //           <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
// //             <Link
// //               href="/projects"
// //               className="transition-colors hover:text-primary"
// //             >
// //               Explore
// //             </Link>
// //             <Link
// //               href="/mentors"
// //               className="transition-colors hover:text-primary"
// //             >
// //               Mentors
// //             </Link>
// //             <Link
// //               href="/about"
// //               className="transition-colors hover:text-primary"
// //             >
// //               About
// //             </Link>
// //           </nav>
// //         </div>

// //         <div className="flex items-center gap-4">
// //           <Button
// //             variant="default"
// //             className="bg-primary hover:bg-primary/90 hidden md:flex gap-1 items-center"
// //             asChild
// //           >
// //             <Link href="/create-project">
// //               <PlusCircle className="h-4 w-4 mr-1" />
// //               Create Project
// //             </Link>
// //           </Button>
// //           <Button variant="ghost" size="icon" className="rounded-full" asChild>
// //             <Link href="/profile">
// //               <User className="h-5 w-5" />
// //               <span className="sr-only">Profile</span>
// //             </Link>
// //           </Button>
// //           <ModeToggle />
// //         </div>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Navbar;
// "use client";

// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Menu, PlusCircle, User } from "lucide-react";
// import Link from "next/link";
// import { ModeToggle } from "../ui/ModeToggle";

// const Navbar = () => {
//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-16 items-center justify-between mx-auto">
//         <div className="flex items-center gap-2">
//           <Link href="/" className="flex items-center space-x-2">
//             <span className="text-xl font-bold gradient">{"<Mentorly>"}</span>
//           </Link>
//           <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
//             <Link
//               href="/projects"
//               className="transition-colors hover:text-primary"
//             >
//               Explore
//             </Link>
//             <Link
//               href="/mentors"
//               className="transition-colors hover:text-primary"
//             >
//               Mentors
//             </Link>
//             <Link
//               href="/about"
//               className="transition-colors hover:text-primary"
//             >
//               About
//             </Link>
//           </nav>
//         </div>

//         <div className="flex items-center gap-4">
//           <Button
//             variant="default"
//             className="bg-primary hover:bg-primary/90 hidden md:flex gap-1 items-center"
//             asChild
//           >
//             <Link href="/create-project">
//               <PlusCircle className="h-4 w-4 mr-1" />
//               Create Project
//             </Link>
//           </Button>
//           <Button variant="ghost" size="icon" className="rounded-full" asChild>
//             <Link href="/profile">
//               <User className="h-5 w-5" />
//               <span className="sr-only">Profile</span>
//             </Link>
//           </Button>
//           <ModeToggle />

//           {/* Mobile Menu */}
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon" className="md:hidden">
//                 <Menu className="h-5 w-5" />
//                 <span className="sr-only">Toggle menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right">
//               <div className="flex flex-col gap-6 py-6">
//                 <Link
//                   href="/projects"
//                   className="text-lg font-medium transition-colors hover:text-primary"
//                 >
//                   Explore
//                 </Link>
//                 <Link
//                   href="/mentors"
//                   className="text-lg font-medium transition-colors hover:text-primary"
//                 >
//                   Mentors
//                 </Link>
//                 <Link
//                   href="/about"
//                   className="text-lg font-medium transition-colors hover:text-primary"
//                 >
//                   About
//                 </Link>
//                 <Button
//                   variant="default"
//                   className="bg-primary hover:bg-primary/90 gap-1 items-center mt-4 w-full"
//                   asChild
//                 >
//                   <Link href="/create-project">
//                     <PlusCircle className="h-4 w-4 mr-1" />
//                     Create Project
//                   </Link>
//                 </Button>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
"use client";

import { Button } from "@/components/ui/button";
import { PlusCircle, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ModeToggle } from "../ui/ModeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav
      className={`bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 border-b border-border/40 transition-transform duration-300 ease-in-out z-50 
`}
    >
      <div className="max-container   padding-container flex items-center justify-between gap-10 py-3 px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold gradient">{"<Mentorly>"}</span>
        </Link>

        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <li className="transition-colors hover:text-primary">
            <Link href="/projects">Explore</Link>
          </li>
          <li className="transition-colors hover:text-primary">
            <Link href="/mentors">Mentors</Link>
          </li>
          <li className="transition-colors hover:text-primary">
            <Link href="/about">About</Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="default"
            className="bg-primary hover:bg-primary/90 gap-1 items-center"
            asChild
          >
            <Link href="/create-project">
              <PlusCircle className="h-4 w-4 mr-1" />
              Create Project
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full" asChild>
            <Link href="/profile">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Link>
          </Button>
          <ModeToggle />
        </div>

        {/* Mobile menu button */}
        <button
          className="text-foreground p-2 md:hidden relative z-50 dark:text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-10 h-10 flex items-center justify-center">
            <span
              className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                isMenuOpen ? " text-black rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`block absolute h-0.5 w-6 bg-current transition-opacity duration-300 ease-in-out ${
                isMenuOpen ? " text-black opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                isMenuOpen ? "text-black -rotate-45" : "translate-y-2"
              }`}
            />
          </div>
        </button>

        {/* Mobile menu with animation */}
        {mounted && (
          <div
            className={`absolute -top-4 left-0 right-0 bg-white/95 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="flex flex-col justify-center h-full px-6 shadow-xl border-b border-primary">
              <ul className="flex flex-col space-y-6 pt-16 pb-6 items-center dark:text-black">
                <li className="py-2 transition-colors hover:text-primary">
                  <Link href="/projects" onClick={toggleMenu}>
                    Explore
                  </Link>
                </li>
                <li className="py-2 transition-colors hover:text-primary">
                  <Link href="/mentors" onClick={toggleMenu}>
                    Mentors
                  </Link>
                </li>
                <li className="py-2 transition-colors hover:text-primary">
                  <Link href="/about" onClick={toggleMenu}>
                    About
                  </Link>
                </li>
                <li className="py-2">
                  <Button
                    variant="default"
                    className="bg-primary hover:bg-primary/90 gap-1 items-center w-full"
                    asChild
                    onClick={toggleMenu}
                  >
                    <Link href="/create-project">
                      <PlusCircle className="h-4 w-4 mr-1" />
                      Create Project
                    </Link>
                  </Button>
                </li>
                <li className="py-2 flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    asChild
                    onClick={toggleMenu}
                  >
                    <Link href="/profile">
                      <User className="h-5 w-5" />
                      <span className="sr-only">Profile</span>
                    </Link>
                  </Button>
                  <ModeToggle />
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
