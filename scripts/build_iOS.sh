cd ..
target="testing";
projName=`cat sencha/app.json | grep "\"name\"" | awk -F\" '{print $4}'`

echo "Building project: $projName"

buildDir="sencha/build/$target/$projName"
cordovaDir="cordova/www"

echo $'\e[32m''building Sencha ' $'\e[00m'

cd sencha/

sencha app build $target
RC=$?
cd ..
# isError=`grep ERROR /tmp/st2.out > /dev/null 2>&1`
if [ $RC -ne 0 ]; then
	echo $'\e[31m''Sencha build error' $'\e[00m'
	cat /tmp/st2.out
	cd ..
	exit 1
else 	
	echo $'\e[32m''Sencha build DONE' $'\e[00m'

	echo `pwd`
	echo "Creating Cordova folder if not present."
	mkdir -p $cordovaDir

	echo "Erasing old contents from Cordova dir"
	rm -rf $cordovaDir/* 

	echo "Copying to Cordova..."
	cp -Rf $buildDir/* $cordovaDir/

	cd cordova
	
	echo "Building Cordova iOS..."
	cordova build ios

	# Optional, clear out the build directory
	rm -rf $buildDir

	echo $'\e[32m''DONE!' $'\e[00m'
	exit 0
fi
