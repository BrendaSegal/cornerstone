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
You will never merge with `master`.  `mmaster` is only used to keep up to date with the BigCommerce
Cornerstone repo.
5. DON'T COMMIT YARN.LOCK OR PACKAGE.JSON CHANGES PLEASE.
6. Don't forget to run `yarn install` to update your local package.json.  You may need to run `nvm update version-num`
to update to a specific version of `node`.
7. Stupidly, you need to use `nvm use 10` for `yarn install`, but `nvm use 8` for `stencil bundle`
8. When ready, follow the *Bundling and publishing a theme steps* (ie: run `stencil bundle`)
9. YOU MAY NEED TO UPDATE THE BANNER (take the existing one from the previous theme) in
`templates/components/common/header.html`

Please look at [the associated Bigcommerce article](https://developer.bigcommerce.com/stencil-docs/developing-further/theme-updates-and-version-control)
 for more details on customizing themes.  Notably, they recommend placing new styles in a custom themes file and not
 in `themes.css`.
