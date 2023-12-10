1. Add script to package.json
   ```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
   ```
2. Go to github.com -> then choose repo > then settings> Pages> choose branch as git hub pages> save> go to Actions tab.
   