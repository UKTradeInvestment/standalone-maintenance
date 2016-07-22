VERSION=$npm_package_govuk_template_version;
FOLDER=govuk_template-${VERSION};
SRC=src/public/govuk-${VERSION}/assets;

mkdir -p $SRC/images;
mkdir $SRC/stylesheets

cp -R $FOLDER/assets/images/* $SRC/images/
cp -R $FOLDER/assets/stylesheets/* $SRC/stylesheets/
