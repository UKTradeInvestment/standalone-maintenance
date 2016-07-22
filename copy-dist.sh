VERSION=$npm_package_govuk_template_version;
SRC=src;
DIST=dist/standalone-maintenance;

rm -r $DIST;
mkdir -p $DIST/public/govuk-$VERSION;
mkdir $DIST/public/css;

cp -R $SRC/public/css/*.css $DIST/public/css/
cp -R $SRC/public/govuk-$VERSION/* $DIST/public/govuk-$VERSION/
cp $SRC/index.html $DIST/
