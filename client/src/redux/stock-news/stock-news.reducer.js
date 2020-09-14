const INITIAL_STATE = {
    stockNews:{
        TSLA:[
            {
                "news_url": "https://www.fool.com/investing/2020/09/12/elon-musk-tesla-is-about-to-unveil-many-exciting-t/",
                "image_url": "https://cdn.snapi.dev/images/v1/u/s/tegsklw-1.jpg",
                "title": "Elon Musk: Tesla Is About to Unveil \"Many Exciting Things\"",
                "text": "What does the electric-car company have up its sleeve for its mysterious Battery Day event?",
                "source_name": "The Motley Fool",
                "date": "Sat, 12 Sep 2020 11:30:00 -0400",
                "topics": [
                    "CEO"
                ],
                "sentiment": "Positive",
                "type": "Article",
                "tickers": [
                    "TSLA"
                ]
            },
            {
                "news_url": "https://seekingalpha.com/article/4373357-why-real-assets-will-soar-in-recovery?utm_source=feed_articles_dividends_reits&utm_medium=referral",
                "image_url": "https://cdn.snapi.dev/images/v1/v/g/reit17.jpg",
                "title": "Why Real Assets Will Soar In The Recovery",
                "text": "Why Real Assets Will Soar In The Recovery",
                "source_name": "Seeking Alpha",
                "date": "Sat, 12 Sep 2020 09:00:00 -0400",
                "topics": [],
                "sentiment": "Positive",
                "type": "Article",
                "tickers": [
                    "BAM",
                    "HTA",
                    "IRT",
                    "NNN",
                    "O",
                    "TSLA",
                    "VNQ"
                ]
            },
            {
                "news_url": "https://www.fool.com/investing/2020/09/12/5-highlights-from-teslas-wild-september-thus-far/",
                "image_url": "https://cdn.snapi.dev/images/v1/4/e/572-5.jpg",
                "title": "5 Highlights From Tesla's Wild September (Thus Far)",
                "text": "The past couple of weeks have been a wild ride for the electric vehicle maker -- even by Tesla standards.",
                "source_name": "The Motley Fool",
                "date": "Sat, 12 Sep 2020 07:40:00 -0400",
                "topics": [],
                "sentiment": "Neutral",
                "type": "Article",
                "tickers": [
                    "TSLA"
                ]
            },
            {
                "news_url": "https://www.youtube.com/watch?v=GrCYUmiDDZw",
                "image_url": "https://cdn.snapi.dev/images/v1/u/o/tesla-should-not-be-valued-as-car-company-gerber.jpg",
                "title": "Tesla Should Not Be Valued as Car Company: Gerber",
                "text": "Gerber Kawasaki President and Chief Executive Officer Ross Gerber, a Tesla Inc. shareholder, says that Tesla should be valued as a tech company. He thinks the electric-car maker is far ahead of its competition. He joins David Westin on \"Bloomberg Wall Street Week.\"",
                "source_name": "Bloomberg Markets and Finance",
                "date": "Fri, 11 Sep 2020 20:57:46 -0400",
                "topics": [],
                "sentiment": "Positive",
                "type": "Video",
                "tickers": [
                    "TSLA"
                ]
            },
            {
                "news_url": "https://www.youtube.com/watch?v=sF0KWB5cljI",
                "image_url": "https://cdn.snapi.dev/images/v1/y/k/tesla-bull-dan-ives-talks-battery-day-and-competition-right-now-its-an-arms-race-in-terms-of-evs.jpg",
                "title": "Tesla bull Dan Ives talks battery day and competition: Right now it's an arms race in terms of EVs",
                "text": "Wedbush Securities Dan Ives breaks down Tesla battery day, China, and Tesla's outlook.",
                "source_name": "Yahoo Finance",
                "date": "Fri, 11 Sep 2020 20:49:57 -0400",
                "topics": [],
                "sentiment": "Positive",
                "type": "Video",
                "tickers": [
                    "TSLA"
                ]
            },
            {
                "news_url": "https://www.benzinga.com/news/rumors/20/09/17473288/tesla-reportedly-in-talks-to-buy-low-carbon-nickel-from-canadas-giga-metal",
                "image_url": "https://cdn.snapi.dev/images/v1/5/q/103868531-gettyimages-451889484530x298.jpg",
                "title": "Tesla Reportedly In Talks To Buy Low-Carbon Nickel From Canada's Giga Metal",
                "text": "Tesla Inc (NASDAQ: TSLA) appears to be serious about its commitment to cut down on its carbon footprint as well as reduce pollution caused while driving.",
                "source_name": "Benzinga",
                "date": "Fri, 11 Sep 2020 18:35:52 -0400",
                "topics": [],
                "sentiment": "Positive",
                "type": "Article",
                "tickers": [
                    "TSLA"
                ]
            },
            {
                "news_url": "https://www.benzinga.com/news/20/09/17458549/munster-says-tesla-is-worth-500b-plus-in-the-long-run",
                "image_url": "https://cdn.snapi.dev/images/v1/j/5/dq2wed2222d.jpg",
                "title": "Munster Says Tesla Is Worth $500B-Plus In The Long Run",
                "text": "Tesla, Inc.'s (NASDAQ: TSLA) recent sell-off may be a buying opportunity for longer-term investors, Loup Ventures managing partner Gene Munster told Benzinga in an interview.",
                "source_name": "Benzinga",
                "date": "Fri, 11 Sep 2020 17:55:59 -0400",
                "topics": [],
                "sentiment": "Positive",
                "type": "Article",
                "tickers": [
                    "TSLA"
                ]
            },
            {
                "news_url": "https://www.youtube.com/watch?v=XvlC38b3dTk",
                "image_url": "https://cdn.snapi.dev/images/v1/m/q/recovery-for-automakers-will-be-a-long-one-analyst.jpg",
                "title": "Recovery for automakers will be a long one: Analyst",
                "text": "CNBC's \"Power Lunch\" team discusses electric vehicles amid the Nikola controversy as two short sellers accuse the automaker of fraud with Bruce Clark, Moody’s analyst.",
                "source_name": "CNBC Television",
                "date": "Fri, 11 Sep 2020 15:32:21 -0400",
                "topics": [],
                "sentiment": "Negative",
                "type": "Video",
                "tickers": [
                    "F",
                    "GM",
                    "NKLA",
                    "TSLA"
                ]
            },
            {
                "news_url": "https://www.etftrends.com/disruptive-technology-channel/ev-sales-standout-and-it-could-be-just-the-beginning/",
                "image_url": "https://cdn.snapi.dev/images/v1/j/k/ev-sales-standout-and-it-could-be-just-the-beginning-440x250.jpg",
                "title": "EV Sales Standout and it Could Be Just the Beginning",
                "text": "The recent pullback in shares of electric vehicle giant Tesla (NASDAQ: TSLA) notwithstanding, the ARK Innovation ETF (NYSEArca: ARKK) is one of the best stories among actively managed ETFs this year and EV sales are a big reason why. Fortunately, that trend is still in its early innings.",
                "source_name": "ETF Trends",
                "date": "Fri, 11 Sep 2020 14:58:17 -0400",
                "topics": [],
                "sentiment": "Positive",
                "type": "Article",
                "tickers": [
                    "ARKK",
                    "TSLA"
                ]
            },
            {
                "news_url": "https://investorplace.com/2020/09/3-electric-vehicle-stocks-to-buy-now-before-they-surge-gm-tsla-wkhs/",
                "image_url": "https://cdn.snapi.dev/images/v1/o/o/ooldw212.jpg",
                "title": "3 Electric Vehicle Stocks to Buy Now Before They Surge",
                "text": "There are good reasons the stock market is bearish on EV stocks. Here are three top electric vehicle stocks to buy now.",
                "source_name": "InvestorPlace",
                "date": "Fri, 11 Sep 2020 14:34:42 -0400",
                "topics": [],
                "sentiment": "Positive",
                "type": "Article",
                "tickers": [
                    "GM",
                    "TSLA",
                    "WKHS"
                ]
            }
        ]
    }
  };
  