## About

[![Netlify Status](https://api.netlify.com/api/v1/badges/7e3456d2-905d-4146-a3cd-1fef5395407e/deploy-status)](https://app.netlify.com/sites/zairza/deploys)

Netlify: `https://zairza.netlify.com/`

**Official Website for the technical club of CET, Bhubaneswar: Zairza**

This will be hosted on `zairza.in`


## File Heirarchy

```
.
├── src     
    ├── components              #reusable components
    ├── config                  #config files(yaml,json,etc)
    ├── containers              #actual source code for each page
    ├── pages                   #routes
├── static                      #static files(css, js, images, etc)                    
├── .editorconfig               #prettier config file                     
├── eslint.json                 #eslint config file                  
├── .gitignore                  #file that are escaped by git                   
├── LICENSE                     #product/Website license
└── README.md                   #README
└── gatsby.config.js            #gatsby config(plugins, themes, etc)
└── package.json                #npm config file
```
##For Linux users facing the following error-
WebpackError: Cannot find module 'core-js/modules/es6.object.assign' 

`install : npm install --save core-js@2`
