let textQuote = document.querySelector('#text');
let author = document.querySelector('#person');
let btn = document.querySelector('button'); 

const quotes = [
    {
        quote: `"God's Word is not a book of human ideas ... it is given to us by [God] to teach us how to live." `,
        person: `Billy Graham`,
    },
    {
        quote: `Eternity to the Godly is day that has no sunset; eternity to the wicked is a night that has no sunrise,`,
        person: `Thomas Watson`
    },
    {
        quote: `"Did Christ finish His work for us? Then there can be no doubt but He will also finish His work on us".`,
        person: ` John Flaven`
    },
    {
        quote: `"Make it your goal to build strong foundations for your life—foundations constructed from prayer and the truths of God's Word."`,

        person: `Billy Graham`
    },
    {
        quote: `"It is not the plan of salvation which can save, it is the carrying out of that plan by the Lord Jesus in his death on our behalf, and our acceptance of the same."`,

        person: `Charles Spurgeon`
    },
    {
        quote: `“You formed my inward parts; you knitted me together in my mother’s womb. I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well.”`,

        person: `Psalm 139:13-14`
    },
    {
        quote: `"Our sins are often as dear to us as our children: we love them, hug them, cleave to them, and delight in them. To part with them is as hard as cutting off a right hand, or plucking out a right eye. But it must be done".`,
        person: `J.C Ryle`
    },
    {
        quote: `“I pray that God, the source of hope, will fill you completely with joy and peace because you trust in him. Then you will overflow with confident hope through the power of the Holy Spirit.”`,

        person: `Romans 15:13`,
    },
    {
        quote: `“Aim at heaven and you will get earth thrown in. Aim at earth and you get neither.”`,

        person: `C.S Lewis`
    },
    {
        quote: `"Ignore a man looking for quick wins

        Fear a man patiently planning world domination".`,

        person: `Anonymous`
    },
    {
        quote: `"Every breath you take,
        you inhale mercy. 
        "`,

        person: `Thomas Watson`
    },
    {
        quote: `“The Bible is the Word of God in such a way that when the Bible speaks, God speaks.”`,

        person: `B.B Warfield` 
    },
    {
        quote: `"Two People are better than one, for they can help each other succeed".`,

        person: `Ecclesiastes 4:9`
    },
    {
        quote: `Peace is not the absence of trouble but the presence of CHRIST.`,

        person: `Sheila Walsh`
    },
    {
        quote: `"One might pry and not be a Christian but one cannot be a Christian and not pray".`,

        person: `R.C Sproul`
    },
    {
        quote: `"There is nothing in heaven, earth, or hell that need make you fear who trust in Jesus".`,

        person: `Charles Spurgeon`
    },
    {
        quote: `"There is no excuse for fear if God is the foundation of our trust".`,

        person: `Charles Spurgeon`
    },
    {
        quote: `"It is an insult to the savior to dream that our works can save us".`,

        person: ` Charles Spurgeon`
    },
    {
        quote: `"Teach me, Lord the way of your decrees that I may follow it to the end".`,

        person: ` Psalm 119:33`
    },
    {
        quote: `"Things happen when you are consistent in prayer".`,
        person: ` Anonymous`
    },
    {
        quote: `"Fear not because your prayer is stammering, your words feeble, and your language poor. Jesus can understand you".`,

        person: ` J.C Ryle`
    },
    {
        quote: `"If there is ever going to be a reversal of people leaving the church, it will begin with a recovery of true preaching."".`,

        person: `  -Christopher Gordon `
    },
    {
        quote: `"Sometimes we get a little tired of the burdens of life, but it is exhilarating to know that Jesus Christ will meet us at the end of life's journey..`,

        person: ` Billy Graham `
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon `
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon `
    },
    {
        quote: `.`,
        person: ` -Christopher Gordon `
    },
    {
        quote: `.`,
        person: ` -Christopher Gordon `
    },
    {
        quote: `.`,
        person: ` -Christopher Gordon `
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
    {
        quote: `.`,
        person: ` Charles Spurgeon`
    },
]

btn.addEventListener('click', () =>{
    let random = Math.floor(Math.random()* quotes.length);

    textQuote.innerText = quotes[random].quote;
    author.innerText = quotes[random].person;

})
