/*24/03/2025

- figma design , application workflow and features.
https://miro.com/app/board/uXjVLT_tMdU=/

authBasic->theme->getALl,search->getone,details->formCreate->authflow->profile
!code steps:
authenticating with github.
theming with tailwindcss and fonts.
building the hero section: includes the search form using nextjs Form.
creating the startup card component.{used dummy data }
setup saniry, setup the sanity structure and schemas.
setup query, live , generate types.
ppr understand.
skeleton , notfound - handle error


YC Directory handle user auth with github and manage one entity which is 
startups.

* it has ppr on the views on the details.
* real time update when new startup is submitted.
* view user profile and his startups.
* view all startups.
* view startup details.
* great ui and ux simple and good .
* login and logout with github.
* ****
* validation using zod , server actions , toaster notifications if error or success.
* real time update

----------------------------------------------------------------------------
YC Steps developing steps :

- dynamic html streaming 
- tailwind styling.
- chadcn
- NextAuth.js with github
- manage the content of the application using SANITY.
----------------------------------------------------------------------------

! npx create-next-app ./

!added this to the package.json
 
"packageManager": "npm@11.0.0",
  "overrides": {
    "react": "$react",
    "react-dom": "$react-dom"
  },

  
//review start with authnetication with github:

  https://authjs.dev/getting-started/installation?framework=Next.js

  follow the installation steps.

then add the providers : go to authentication and pick github.

but we need to setup from scratch so we go to providers tab !

https://authjs.dev/getting-started/authentication/oauth
then follow here:
https://authjs.dev/getting-started/providers/github


created new github oauth and added the client id and secret to the .env.local file.
https://github.com/settings/applications/...



! added (root) and inside the layout and apge andstarted developing the navbar
the navbar have an image logo from the figma design
and other side have conditional rendering if the user logged in 
we show logout and profile and other stuff, if not login button!


to know if the user logged in or not we use the useSession hook from next-auth

from HERE!
$ import { auth , signIn, signOut } from "@/auth";
  const session = await auth();
  
this session will return the user if logged in or null if not.


he want to excute the server action sign out when the user click

so instead of <button onClick={signout}...ect

we use this: form action because we want to excute the server action.

<form action={async () => {
  "use server";
  await signOut();
}}><button type="submit"> logout</button>


!implmented login and logout with github. on the navbar haha crazy!
!used the new react19 forms and action to excute the server action.


//review start Theming with tailwindcss and fonts 
got the assets !

! added
favicon
public folder for images.
font folder for fonts:worksans-bold.ttf  ,worksans-regular.ttf,...ect


also the utils folder that have
 1- utils.ts functions: 
  ---cn() to handle the classes and merge
  --- parse server action response to json
  --- formatDate to locale date string
  --- format number tp M , K , B

  2- validation.ts:
  --- exports formSchema for the validation using zod.

- configure the global styles!.

we do this :
for font on the layout.tsx we add it 
const workSans = localFont({
  src: [
    { path: "./fonts/WorkSans-Black.ttf", weight: "900", style: "normal" },
    { path: "./fonts/WorkSans-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./fonts/WorkSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/WorkSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/WorkSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/WorkSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/WorkSans-Thin.ttf", weight: "300", style: "normal" },
    { path: "./fonts/WorkSans-Light.ttf", weight: "200", style: "normal" },
    { path: "./fonts/WorkSans-ExtraLight.ttf", weight: "100", style: "normal" },
  ],
  variable: "--font-work-sans",
});

//review
on global.css 
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-work-sans: var(--font-work-sans);
  --color-primary-100: # ffe8f0;
  --color-primary: # ee2b69;
  --color-secondary: # fbe843;
  --color-black-100: # 333333;
  --color-black-200: # 141414;
  --color-black-200: # 7d8087;
  --color-black: # 000000;
  --color-white: # ffffff;
  --color-white-100: # e7e7e7;
}
@layer utilities {...}

after that we add the custom utilities and classes!
- tips:
flexCenter , flexBetween, container,
maxContainer , paddingContainer..

text-size-weight: like figma!!
text-30-bold , text-20-medium 
heading , subheading:font,bg,px,py,m,RESPOSIVE



section container
custom container:
profile container
width , bg ,{min,max}h ,px,py,m,flex..ect


card grid,
profileTitle,...ect




//TODO
## summary : so we define the theme font, colors, size , shadow , raduis ,breakpoints

then utilities over time: 
for profile ,containerslike section , profile,..ect
custom text size and weight , font

grid , flex custom classes. 


Before implementing styles, define: the shared headers , compoents or text that are reused across pages 


- do utilities that minimize the code , center them in css and montion responsive..ect
Project scope (e.g., dark mode, responsiveness, UI complexity)

Structure: Start with a single CSS file for new projects and modularize (e.g., theme.css, utilities.css) as it grows. For existing projects, refactor gradually.
Theme Variables: Use CSS variables (e.g., --primary: ee2b69) for colors, typography, and spacing, enabling easy theming like dark mode via media queries.
Utilities: Create reusable classes (e.g., .flex-between) for common patterns using @apply and organize them with @layer utilities.
Theming: Adjust variables for dark mode while keeping brand consistency and ensuring accessibility (contrast, focus states).

Typography: Define font stacks, sizes, weights, and line heights for headings, paragraphs, and buttons.
Spacing: Use a consistent spacing scale (e.g., 4, 8, 16, 24px) for margins, paddings, and grid gaps.
Layout: Implement a grid system with container, row, and column classes for responsive layouts.
Components: Style components with utility classes and encapsulate complex styles in component-scoped CSS.
Responsive Design: Use media queries for breakpoints and adjust styles for different screen sizes.
Dark Mode: Implement dark mode with CSS variables and media queries, ensuring readability and accessibility.
Accessibility: Ensure color contrast, focus states, and text legibility for users with disabilities.

----------------------------------------------------------------------------

//review
!$ npm i tailwindcss-animate @tailwindcss/typography  zod 
install chadcn :
$ npx shadcn@latest init
to add compoent:
$ npx shadcn@latest add button



understand that the problem is to copy and paste the style from one comp to another
this will lead to inconsistency and hard to maintain.!


start with the hero section:
HEADING : text color , size , font , text center , bg
 spacing around it , leading, max width

//BUG the new Form compoent of nextjs
it allow to do client side navigation and server side navigation on formsubmition
action attr can take function or string:
! so this form when its submitted it will set the url to /?query=value
!then we can excute function based on the value we get!

import Form from "next/form";
export default function SearchForm() {
  return (
    <Form action={"/"}>
      <input type="text" name="search" placeholder="Search" />
      <button type="submit">Search</button>
    </Form>
  );
}

this will change the url to /search?query=...ect

and excute the server action on the form submit.

we can do button that have handler to reset the form
  function reset(){
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  }

so in that form we did : form , reset button , search button in form container.


//review Build  CARD component
that card was abit complex
so we need to know the structure of the data:
using json server or api docs!

{used dummy data}

https://placehold.co/600x400 for images!


//Review , SETUP SANITY
why we use sanity:
- great pricing 
-   cms: content management system
content is the data that we want to manage and display on the website.
it can be text , images , videos ,...ect of the frontend but also can be 
the dynamic data that we want to display on the website. like products..ect
however the content is stored in the database and we need to fetch it from the database
also if we have a bit complex logic and data we need to need a seperate backend server and api



steps:
- create an account on sanity.io
follow the onboarding steps.
$ npm create sanity@latest -- --project z4i9zfq6 --dataset production --template clean --typescript --output-path studio-yc_directory

$npm i next-sanity@canary

we got sanity.config.ts and sanity.cli.ts
we need to configure the project id and dataset in the env file.
make sure the variables are there.


!ok we go to sanity :client.ts file and schemaTypes/index.ts

so that's all it need to be done to setup sanity with nextjs!

//review sanity structure and schema types! JUST FOR THE STUDIO
title , name , type, 

defineType and defineField 
 type: "array",
      of: [
        defineArrayMember({ type: "string" })  
      ]


so we defined the entities and the data we need to have and the user and made 
a diagram on https://miro.com/app/board/uXjVLT_tMdU=/

on the schema type we create a file like author.ts 

we export author object that call defineType and pass name ,..icon
and then fields:[
  defineField({name:"id",type:"number",...ect})]


  3. Custom Desk Structure (structure.ts)
This consolidated schema is then used to configure Sanity Studio,
 ensuring all defined document types are recognized
for relation :
  defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),

for valdation  andm there are something for slug as well
    validation: (rule) =>
      rule.required().min(3).max(20).error("please enter a valid category"),


we need markdown so we need to install the markdown package
$ npm install sanity-plugin-markdown

and then go to sanity.config.ts and add it to the plugins array

and on layout we need to import this:
import "easymde/dist/easymde.min.css";


//review: now we setup sanity and now query syntax

HERE  of we have just this and no user we can give the client this

 https://www.sanity.io/learn/course/day-one-with-sanity-studio/improving-the-editorial-experience

 GROQ query language: sanity open source lanuage
 describe what info the app need , join information from several sets ..ect

 http://localhost:3000/studio/vision

 * to get everything
 *[_type=="startup"] : get all the startups

 if we want to get a specific startup of a user 
 we have on the document just a ref 
 *[_type=="startup" &&defined(slug.current) ]{
  _id, title , slug,_createdAt ,category , image ,pitch
}


to get another doucment like the user 
*[_type=="startup" &&defined(slug.current) ]{
  _id, title , slug,_createdAt ,category , image ,pitch,
   author->{
     _id, name , image ,bio
   }
}

to do it in code we create queries.ts on lib of sanity and
 defineQuery(``)
import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(
  `*[_type=="startup" &&defined(slug.current)]|order(_createdAt desc){
  _id,
  title,
  slug,
  _createdAt,
  category,
   image,
   pitch,
   author->{
        _id,
        name,
        image,
        bio
      }
}
`
);


//TODO: now its time to get real data!
  const posts = await client.fetch(STARTUPS_QUERY);

  console.log("posts", posts); 

  we need the type from sanity so we run this command

  $ npx sanity@latest schema extract --path=./sanity/extract.json


  {sanity-typegen.json

  "path": "./src//.{ts,tsx,js,jsx}",
  "schema": "./sanity/extract.json",
  "generates": "./sanity/types.ts"
}

$ npx sanity@latest typegen  generate
copy command on package .json


//REVIEW cache and live api  w/next.js
make isCdn false in sanity.config.ts

$ npm i server-only
setup live.ts on sanity/lib
then  change it from client. to sanityFetch


const {data:posts} = await sanityFetch({query:STARTUPS_QUERY})

and at the end 

<SanityLive />


//REVIEW the details page

$npm i markdown-it
$ npm i --save-dev @types/markdown-it
if we want to use markdown we install  and parse it to html .
 const parsedContent = md.render(post?.pitch || "")
   <article
   className="prose max-w-4xl font-work-sans break-all"
   dangerouslySetInnerHTML={{ __html: parsedContent }}
            />


--------------------------------------------

PPR allow us to combine static and dynamic comp on the same page
its not experemental so we need to add the experimental flag in next.config.js
and export the experimental_ppr flag

then we need to know the content to make dynamic 

this component is the real time one who depend on the request like the views!
wrap it <Suspense fallback={<Skeleton/>}></Suspense>

then we go to the compoent

this compoent need to fetch the data of the post we are currently looking at
so the number of views is embedded in the post

then we need to call sanity write and add 1 to the views




//review sanity write client 
this will allow us to create , update and delete from the app 
not nessacary from sanity

we will have to setup new sanity write client in sanity

- we need to generate a token from sanity , go do dasnboard and give it editor ability token
SANITY_WRITE_TOKEN=""

go to sanity/env and add token
create write-client.ts and copy the same with the client code just add the token

    await writeClient.patch(id).set({ views: totalViews + 1 }).commit()

now we will see skeleton until it get updated!

we want to update this in the background while still seeing the result 

//unstable_after as after from next/server 
it can be used in server comp , server action , routehandler and more

it allow you to excute code after a response is finished, 
like side effects for logging , analytics ,..ect or updating view

in ppr even if we update the static part and reload we wont get it because it cached
however the dynamic part will update in the background
 


//REVIEW user auth flow!
before we was just login without saving the user info 
using ofc a diagram , depends on the session
we should query based on the session data like email if user exists or not 

if exist return and do something
if not create user:author


wrote a query:
export const AUTHOR_QUERY = defineQuery(`
*[_type =="author" && email ==$email][0]{
    _id, name, avatar,userName, bio, id, userName
}`);


then go to auth.ts the first one which we use d to setup provider
there we setup callback that excute after successfull authentication

callback:{
--excute the sign in process
async signIn({ user, account, profile }) {
--check if the user exists , if not create it
return true!
}}

-this will allow us to connect github user to our sanity user.

async jwt({ token, account, profile }) {
  if (account && profile) {
  --fetch  user 
  }
  token.id = user._id;
  return token;
}
- this pass the profile id to the session
    async session({ session, token }) {
      Object.assign(session, { id: token.id });
      return session;
    },

this steps all toghether will get the user or create it 
and his id in sanity will be passed to the session



now we can go to any page 

  const session = await auth();

      const user = await client
      .withConfig({ useCdn: false }) //the problem!!
      .fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
        id: session?.id,
      });
    console.table(user);


    //REVIEW CREATE STARTUP PAGE AND FORM
//BUG to check if user is logged in or not we use the session and redirect if not exist
    create the route of of the page
    do header and section on the page and create the component of the form


    using some shadcn ui components
//$ npx shadcn@latest add input textarea toast 


  const [errors, setErrors] = useState<Record<string, string>>({});
  check the compoents
  <label , input ,errors message

now we watch the markdown editor!!:

//$ npm i @uiw/react-md-editor
import MDEditor from "@uiw/react-md-editor";
<div className="startup-form-editor ">
        <MDEditor value={pitch} onChange={SetPitch} />
      </div>


      in form we need to handle the name , id , error message of input
      then loading state , validation state and submit state.
//!we created the ui !, now we focus on the logic
//*useActionState allow us to update the state based on the result of form action
we will use new hook called   state ,formAction ,Ispending = useActionState

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {error:"", state:"INITIAL"});

  create the zod validation schema

  inside the handler we get the data from the form and call the schema to validate it 
    function handleFormSubmit = (prevState:any, formData:FormData)=>{

    try{
const fromValues = {
  title: formData.get("title")as string,
  description: formData.get("description")as string,
  category: formData.get("category")as string,
  link: formData.get("link")as string,
  pitch,
}
try{
  await formSchema.parseAsync(fromValues);
}catch(e){
if(e instanceof z.ZodError){
  const fieldErrors = e.flatten().fieldErrors;
  setErrors(fieldErrors as unknown as Record<string, string>);
  return {...prevState, error:"Validation Error", status:"ERROR"}
}
return {...prevState, error:"An unexpected error occurred", status:"ERROR"}
}

//!prevstate and the error and zoderror is to handle the error

toast message on  src dir ,the layout below the body 
      <Toaster />

 {toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })}



//REVIEW when doing validation of form do it on the html client: required, minLength..ect
//!on the server validation we validate and return errors and the prev values back
    autoComplete="street-address"
                aria-describedby="streetAddress-error"

                we can add these!
<form action={action} className="space-y-6" autoComplete="on"></form>


we go to the lib folder and create the action.ts file
in the action we check the authentication by session then create and order data to write it to sanity
   






//review PERFORMANCE AND BUG TRACKING IN NEXTJS APPS  /SENTRY

it's time to make sure that users that will use our app features dont break them

npx @sentry/wizard@latest -i nextjs --saas --org omed-team --project javascript-nextjs


however we test !
we need to have a sentry to track the bugs and errors even if they block the app


//REVIEW  
parallel fetch!


*/
