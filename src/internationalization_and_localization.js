{
    console.log(`
        ************** Internationalization & Localization examples **************

                                    === Collation ===
    `);

    {
        // in German,  'ä' sorts with 'a'
        // in Swedish, 'ä' sorts after 'z'
        let list = ['ä', 'a', 'z'];
        let l10nDE = new Intl.Collator('de');
        let l10nSV = new Intl.Collator('sv');
        console.log(`l10nDE.compare('ä', 'z'):`, l10nDE.compare('ä', 'z'));
        console.log(`l10nSV.compare('ä', 'z'):`, l10nSV.compare('ä', 'z'));
        console.log(`list.sort(l10nDE.compare):`, list.sort(l10nDE.compare));
        console.log(`list.sort(l10nSV.compare):`, list.sort(l10nSV.compare));
    }

    console.log(`
                                === Number Formatting ===
    `);

    {
        let l10nEN = new Intl.NumberFormat('en-US');
        let l10nDE = new Intl.NumberFormat('de-DE');
        console.log(`Compare number format EN:`, l10nEN.format(1234567.89) === '1,234,567.89');
        console.log(`Compare number format DE:`, l10nDE.format(1234567.89) === '1.234.567,89');
    }

    console.log(`
                               === Currency Formatting ===
    `);

    {
        let l10nUSD = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        let l10nGBP = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        });
        let l10nEUR = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        });
        console.log(`Compare currency format USD:`, l10nUSD.format(100200300.40) === '$100,200,300.40');
        console.log(`Compare currency format GBP:`, l10nGBP.format(100200300.40) === '£100,200,300.40');
        console.log(`Compare currency format EUR:`, l10nEUR.format(100200300.40) === '100.200.300,40 €');
    }

    console.log(`
                              === Date/Time Formatting ===
    `);

    {
        let l10nEN = new Intl.DateTimeFormat('en-US');
        let l10nDE = new Intl.DateTimeFormat('de-DE');
        console.log(`Compare date format EN:`, l10nEN.format(new Date('2017-01-02')) === '1/2/2017');
        console.log(`Compare date format DE:`, l10nDE.format(new Date('2017-01-02')) === '2.1.2017');
    }

}
