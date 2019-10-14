## Installing stencil
https://developer.bigcommerce.com/stencil-docs/installing-stencil-cli/installing-stencil#authorizing_authentication

## Live preview
### If first time installing:
`npm install`

### Initializing stencil
```
stencil init
stencil start
```

[BigCommerce link for more details](https://developer.bigcommerce.com/stencil-docs/installing-stencil-cli/live-previewing-a-theme)


## Editing stencil
https://support.bigcommerce.com/s/article/Stencil-Themes

## CSS
https://developer.bigcommerce.com/stencil-docs/storefront-customization/theme-assets

## Bundling and publishing a theme
https://developer.bigcommerce.com/stencil-docs/deploying-a-theme/bundling-and-pushing#bundling_verify-directory

## To pack:
`stencil bundle`

It will create a zip file (within your directory).  Don't commit it.
You need then upload this zip file to Bigcommerce.

## Stringify to be able to console log stuff

<script type="text/javascript">
    console.log({{{JSONstringify urls}}});
</script>

## FORK WORKFLOW

### GitHub authentication
If you have 2-factor authentication enabled, your tokens may expire from time to time.  How will you know if your token is expired?  Your local git will say that you don't have access to the repo when you attempt to interact with `upstream` or `origin`.  If that happens, generate a new token here: https://github.com/settings/tokens .
Then, when you're being asked for your password locally, paste the provided password from the token creation.
It should only ask you for this password once for the duration of the GitHub token's life.

### Keeping our `master` up to date
1. Fetch the forked repo's master locally
2. Checkout to this repo's master
3. Merge the upstream master into your master branch
4. After verifying everything works, push master to github

```
git fetch upstream
git checkout master
git merge upstream/master
git push origin master
```

Please see [the github article](https://help.github.com/en/articles/syncing-a-fork) for more details.

### Working on branches
1. Check if there's a new version of cornerstone and perform the *Keeping our `master` up to date*
steps, if required.
2. Checkout on top of the newest branch by version/date.
These will be named as follows cornerstone_version-YYYY-MM-DD (eg: 4.2.0-2019-10-14).
Name your branch using the current day's date.
3. Rebase off of master: `git pull --rebase origin master` on your new branch.
This will keep it up to date with the newest Cornerstone changes.  Push to origin.
`git push origin branchname`
4. Finally, you can begin working on your branch and pushing to it remotely.
You will never merge with `master`.  `master` is only used to keep up to date with the BigCommerce
Cornerstone repo.
5. DON'T COMMIT YARN.LOCK OR PACKAGE.JSON CHANGES PLEASE.
6. Don't forget to run `yarn install` to update your local package.json.  You may need to run `nvm update version-num`.  Note: I don't always use this.
to update to a specific version of `node`.
7. Stupidly, you need to use `nvm use 10` for `stencil start` and `stencil bundle`
8. When ready, follow the *Bundling and publishing a theme steps* (ie: run `stencil bundle`)
9. YOU MAY NEED TO UPDATE THE BANNER (take the existing one from the previous theme) in
`templates/components/common/header.html`
10. To test a specific style locally, type
`stencil start --variation NTL`

Please look at [the associated Bigcommerce article](https://developer.bigcommerce.com/stencil-docs/developing-further/theme-updates-and-version-control)
 for more details on customizing themes.  Notably, they recommend placing new styles in a custom themes file and not
 in `themes.css`.

### not ok -- Error: Could not fetch a list of the store channels: Request failed with status code 401

Save your access token to secrets.stencil.json and try to stencil init/start again.  OR just try to pop in your access token at the `stencil init` stage

### Your theme's schema.json has errors: schema[6].settings[4].type should be equal to one of the allowed values

I was actually able to see which setting it was because in the little bar above the code in schema.json, you can select the array values by index.  Anyway, there was no difference between my branch and master, so via a `git blame`, I saw that they had references a new type that was introduced.  It required an update the to the stencil-cli locally for me to be able to `stencil bundle` and validate that type.  https://github.com/bigcommerce/cornerstone/commit/d94afea54ed3678c7a975b27e07a5fcfcf000e90
TO ENSURE THE NEW VERSION OF STENCIL IS RUNNING LOCALLY, WRITE `nvm use 18.15.0` BEFORE RUNNING `stencil bundle`.  You will need to do the following for the CleanWebpackBundle error as well:
# Install Stencil CLI supported version of Node.js
`nvm install 18.15.0`

# Switch to Stencil CLI supported version of Node.js:
`nvm use 18.15.0`

# Install Stencil CLI
`npm install -g @bigcommerce/stencil-cli`

THEN RUN `yarn install` before bundling but probably don't commit yarn.lock?