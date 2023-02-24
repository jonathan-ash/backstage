/*! For license information please see 2737e8cf.bfb70d08.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[454471],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},144093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});n(827378);var r=n(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"quickstart-app-plugin",title:"Adding Custom Plugin to Existing Monorepo App"},l=void 0,s={unversionedId:"tutorials/quickstart-app-plugin",id:"tutorials/quickstart-app-plugin",title:"Adding Custom Plugin to Existing Monorepo App",description:"September 15th 2020 - v0.1.1-alpha.21",source:"@site/../docs/tutorials/quickstart-app-plugin.md",sourceDirName:"tutorials",slug:"/tutorials/quickstart-app-plugin",permalink:"/docs/tutorials/quickstart-app-plugin",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/tutorials/quickstart-app-plugin.md",tags:[],version:"current",frontMatter:{id:"quickstart-app-plugin",title:"Adding Custom Plugin to Existing Monorepo App"},sidebar:"docs",previous:{title:"Future developer journey",permalink:"/docs/tutorials/journey"},next:{title:"React Router 6.0 Migration",permalink:"/docs/tutorials/react-router-stable-migration"}},p={},u=[{value:"September 15th 2020 - v0.1.1-alpha.21",id:"september-15th-2020---v011-alpha21",level:6},{value:"We will add a lot to this file for the sake of ease. Please don&#39;t do this in productional code!",id:"we-will-add-a-lot-to-this-file-for-the-sake-of-ease-please-dont-do-this-in-productional-code",level:6}],c={toc:u};function m(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h6",o({},{id:"september-15th-2020---v011-alpha21"}),"September 15th 2020 - v0.1.1-alpha.21"),(0,r.kt)("br",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This document takes you through setting up a new plugin for your existing\nmonorepo with a ",(0,r.kt)("em",{parentName:"p"},"GitHub provider already setup"),". If you don't have either of\nthose, you can clone\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/johnson-jesse/simple-backstage-app"}),"simple-backstage-app"),"\nwhich this document builds on."),(0,r.kt)("p",{parentName:"blockquote"},"This document does not cover authoring a plugin for sharing with the Backstage\ncommunity. That will have to be a later discussion."),(0,r.kt)("p",{parentName:"blockquote"},"We start with a skeleton plugin install. And after verifying its\nfunctionality, extend the Sidebar to make our life easy. Finally, we add\ncustom code to display GitHub repository information."),(0,r.kt)("p",{parentName:"blockquote"},"This document assumes you have Node.js 16 active along with Yarn and Python.\nPlease note, that at the time of this writing, the current version is\n0.1.1-alpha.21. This guide can still be used with future versions, just,\nverify as you go. If you run into issues, you can compare your setup with mine\nhere >\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/johnson-jesse/simple-backstage-app-plugin"}),"simple-backstage-app-plugin"),".")),(0,r.kt)("h1",o({},{id:"the-skeleton-plugin"}),"The Skeleton Plugin"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start by using the built-in creator. From the terminal and root of your\nproject run: ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn new --select plugin")),(0,r.kt)("li",{parentName:"ol"},"Enter a plugin ID. I used ",(0,r.kt)("inlineCode",{parentName:"li"},"github-playground")),(0,r.kt)("li",{parentName:"ol"},"When the process finishes, let's start the backend:\n",(0,r.kt)("inlineCode",{parentName:"li"},"yarn --cwd packages/backend start")),(0,r.kt)("li",{parentName:"ol"},"If you see errors starting, refer to\n",(0,r.kt)("a",o({parentName:"li"},{href:"https://backstage.io/docs/auth/"}),"Auth Configuration")," for more information on\nenvironment variables."),(0,r.kt)("li",{parentName:"ol"},"And now the frontend, from a new terminal window and the root of your\nproject: ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn start")),(0,r.kt)("li",{parentName:"ol"},"As usual, a browser window should popup loading the App."),(0,r.kt)("li",{parentName:"ol"},"Now manually navigate to our plugin page from your browser:\n",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/github-playground")),(0,r.kt)("li",{parentName:"ol"},"You should see successful verbiage for this endpoint,\n",(0,r.kt)("inlineCode",{parentName:"li"},"Welcome to github-playground!"))),(0,r.kt)("h1",o({},{id:"the-shortcut"}),"The Shortcut"),(0,r.kt)("p",null,"Let's add a shortcut."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open and modify ",(0,r.kt)("inlineCode",{parentName:"li"},"root: packages > app > src > components > Root.tsx")," with the\nfollowing:")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),'import GitHubIcon from \'@material-ui/icons/GitHub\';\n...\n<SidebarItem icon={GitHubIcon} to="github-playground" text="GitHub Repository" />\n')),(0,r.kt)("p",null,"Simple! The App will reload with your changes automatically. You should now see\na GitHub icon displayed in the sidebar. Clicking that will link to our new\nplugin. And now, the API fun begins."),(0,r.kt)("h1",o({},{id:"the-identity"}),"The Identity"),(0,r.kt)("p",null,"Our first modification will be to extract information from the Identity API."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start by opening\n",(0,r.kt)("inlineCode",{parentName:"li"},"root: plugins > github-playground > src > components > ExampleComponent > ExampleComponent.tsx")),(0,r.kt)("li",{parentName:"ol"},"Add two new imports")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"// Add identityApiRef to the list of imported from core\nimport { identityApiRef, useApi } from '@backstage/core-plugin-api';\n")),(0,r.kt)("ol",o({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"Adjust the ExampleComponent from inline to block")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"from inline:")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"const ExampleComponent = () => ( ... )\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"to block:")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"const ExampleComponent = () => {\n\n    return (\n        ...\n    )\n}\n")),(0,r.kt)("ol",o({},{start:4}),(0,r.kt)("li",{parentName:"ol"},"Now add our hook and const data before the return statement")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"// our API hook\nconst identityApi = useApi(identityApiRef);\n\n// data to use\nconst userId = identityApi.getUserId();\nconst profile = identityApi.getProfile();\n")),(0,r.kt)("ol",o({},{start:5}),(0,r.kt)("li",{parentName:"ol"},"Finally, update the InfoCard's jsx to use our new data")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),'<InfoCard title={userId}>\n  <Typography variant="body1">\n    {`${profile.displayName} | ${profile.email}`}\n  </Typography>\n</InfoCard>\n')),(0,r.kt)("p",null,"If everything is saved, you should see your name, id, and email on the\ngithub-playground page. Our data accessed is synchronous. So we just grab and\ngo."),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/backstage/backstage/tree/master/contrib"}),"https://github.com/backstage/backstage/tree/master/contrib")),(0,r.kt)("ol",o({},{start:6}),(0,r.kt)("li",{parentName:"ol"},"Here is the entire file for reference\n",(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/backstage/backstage/tree/master/contrib/docs/tutorials/quickstart-app-plugin/ExampleComponent.md"}),"ExampleComponent.tsx"))),(0,r.kt)("h1",o({},{id:"the-wipe"}),"The Wipe"),(0,r.kt)("p",null,"The last file we will touch is ExampleFetchComponent. Because of the number of\nchanges, let's start by wiping this component clean."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start by opening\n",(0,r.kt)("inlineCode",{parentName:"li"},"root: plugins > github-playground > src > components > ExampleFetchComponent > ExampleFetchComponent.tsx")),(0,r.kt)("li",{parentName:"ol"},"Replace everything in the file with the following:")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport useAsync from 'react-use/lib/useAsync';\nimport Alert from '@material-ui/lab/Alert';\nimport { Table, TableColumn, Progress } from '@backstage/core-components';\nimport { githubAuthApiRef, useApi } from '@backstage/core-plugin-api';\nimport { graphql } from '@octokit/graphql';\n\nexport const ExampleFetchComponent = () => {\n  return <div>Nothing to see yet</div>;\n};\n")),(0,r.kt)("ol",o({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"Save that and ensure you see no errors. Comment out the unused imports if\nyour linter gets in the way.")),(0,r.kt)("h6",o({},{id:"we-will-add-a-lot-to-this-file-for-the-sake-of-ease-please-dont-do-this-in-productional-code"}),"We will add a lot to this file for the sake of ease. Please don't do this in productional code!"),(0,r.kt)("h1",o({},{id:"the-graph-model"}),"The Graph Model"),(0,r.kt)("p",null,"GitHub has a GraphQL API available for interacting. Let's start by adding our\nbasic repository query"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add the query const statement outside ExampleFetchComponent")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"const query = `{\n  viewer {\n    repositories(first: 100) {\n      totalCount\n      nodes {\n        name\n        createdAt\n        description\n        diskUsage\n        isFork\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}`;\n")),(0,r.kt)("ol",o({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Using this structure as a guide, we will break our query into type parts"),(0,r.kt)("li",{parentName:"ol"},"Add the following outside of ExampleFetchComponent")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"type Node = {\n  name: string;\n  createdAt: string;\n  description: string;\n  diskUsage: number;\n  isFork: boolean;\n};\n\ntype Viewer = {\n  repositories: {\n    totalCount: number;\n    nodes: Node[];\n    pageInfo: {\n      endCursor: string;\n      hasNextPage: boolean;\n    };\n  };\n};\n")),(0,r.kt)("h1",o({},{id:"the-table-model"}),"The Table Model"),(0,r.kt)("p",null,"Using Backstage's own component library, let's define a custom table. This\ncomponent will get used if we have data to display."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add the following outside of ExampleFetchComponent")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"type DenseTableProps = {\n  viewer: Viewer;\n};\n\nexport const DenseTable = ({ viewer }: DenseTableProps) => {\n  const columns: TableColumn[] = [\n    { title: 'Name', field: 'name' },\n    { title: 'Created', field: 'createdAt' },\n    { title: 'Description', field: 'description' },\n    { title: 'Disk Usage', field: 'diskUsage' },\n    { title: 'Fork', field: 'isFork' },\n  ];\n\n  return (\n    <Table\n      title=\"List Of User's Repositories\"\n      options={{ search: false, paging: false }}\n      columns={columns}\n      data={viewer.repositories.nodes}\n    />\n  );\n};\n")),(0,r.kt)("h1",o({},{id:"the-fetch"}),"The Fetch"),(0,r.kt)("p",null,"We're ready to flush out our fetch component"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add our api hook inside ExampleFetchComponent")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"const auth = useApi(githubAuthApiRef);\n")),(0,r.kt)("ol",o({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"The access token we need to make our GitHub request and the request itself is\nobtained in an asynchronous manner."),(0,r.kt)("li",{parentName:"ol"},"Add the useAsync block inside the ExampleFetchComponent")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"const { value, loading, error } = useAsync(async (): Promise<any> => {\n  const token = await auth.getAccessToken();\n\n  const gqlEndpoint = graphql.defaults({\n    // Uncomment baseUrl if using enterprise\n    // baseUrl: 'https://github.MY-BIZ.com/api',\n    headers: {\n      authorization: `token ${token}`,\n    },\n  });\n  const { viewer } = await gqlEndpoint(query);\n  return viewer;\n}, []);\n")),(0,r.kt)("ol",o({},{start:4}),(0,r.kt)("li",{parentName:"ol"},"The resolved data is conveniently destructured with ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," containing our\nViewer type. ",(0,r.kt)("inlineCode",{parentName:"li"},"loading")," as a boolean, self explanatory. And ",(0,r.kt)("inlineCode",{parentName:"li"},"error")," which is\npresent only if necessary. So let's use those as the first 3 of 4 multi\nreturn statements."),(0,r.kt)("li",{parentName:"ol"},"Add the ",(0,r.kt)("em",{parentName:"li"},"if return")," blocks below our async block")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),'if (loading) return <Progress />;\nif (error) return <Alert severity="error">{error.message}</Alert>;\nif (value && value.repositories) return <DenseTable viewer={value} />;\n')),(0,r.kt)("ol",o({},{start:6}),(0,r.kt)("li",{parentName:"ol"},"The third line here utilizes our custom table accepting our Viewer type."),(0,r.kt)("li",{parentName:"ol"},"Finally, we add our ",(0,r.kt)("em",{parentName:"li"},"else return")," block to catch any other scenarios.")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),'return (\n  <Table\n    title="List Of User\'s Repositories"\n    options={{ search: false, paging: false }}\n    columns={[]}\n    data={[]}\n  />\n);\n')),(0,r.kt)("ol",o({},{start:8}),(0,r.kt)("li",{parentName:"ol"},"After saving that, and given we don't have any errors, you should see a table\nwith basic information on your repositories."),(0,r.kt)("li",{parentName:"ol"},"Here is the entire file for reference\n",(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/backstage/backstage/tree/master/contrib/docs/tutorials/quickstart-app-plugin/ExampleFetchComponent.md"}),"ExampleFetchComponent.tsx")),(0,r.kt)("li",{parentName:"ol"},"We finished! You should see your own GitHub repository's information\ndisplayed in a basic table. If you run into issues, you can compare the repo\nthat backs this document,\n",(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/johnson-jesse/simple-backstage-app-plugin"}),"simple-backstage-app-plugin"))),(0,r.kt)("h1",o({},{id:"where-to-go-from-here"}),"Where to go from here"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Break apart ExampleFetchComponent into smaller logical parts contained in\ntheir own files. Rename your components to something other than ExampleXxx."),(0,r.kt)("p",{parentName:"blockquote"},"You might be really proud of a plugin you develop. Follow this next tutorial\nfor an in-depth look at publishing and including that for the entire Backstage\ncommunity. ",(0,r.kt)("a",o({parentName:"p"},{href:"#"}),"TODO"),".")))}m.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,l,s=o(e),p=1;p<arguments.length;p++){for(var u in i=Object(arguments[p]))n.call(i,u)&&(s[u]=i[u]);if(t){l=t(i);for(var c=0;c<l.length;c++)r.call(i,l[c])&&(s[l[c]]=i[l[c]])}}return s}},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;var i=60109,l=60110,s=60112;var p=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),a=c("react.portal"),c("react.fragment"),c("react.strict_mode"),c("react.profiler"),i=c("react.provider"),l=c("react.context"),s=c("react.forward_ref"),c("react.suspense"),p=c("react.memo"),u=c("react.lazy")}var m="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function g(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||h}function k(){}function y(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=g.prototype;var b=y.prototype=new k;b.constructor=y,r(b,g.prototype),b.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!N.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var p=Array(s),u=0;u<s;u++)p[u]=arguments[u+2];a.children=p}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===a[r]&&(a[r]=s[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:v.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case a:s=!0}}if(s)return i=i(s=e),e=""===r?"."+A(s,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),C(i,t,n,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(O,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var p=0;p<e.length;p++){var u=r+A(l=e[p],p);s+=C(l,t,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),p=0;!(l=e.next()).done;)s+=C(l=l.value,t,n,u=r+A(l,p++),i);else if("object"===l)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function P(e,t,n){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function q(){var e=T.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,n)=>{n(541535)}}]);