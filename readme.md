# Earth Time Introduction

Earth Time is a new standard of time built to notate and recognize time as absolute worldwide events first, and local events as relative events second. Time is reckoned currently primarily local, with the UTC timecode only there as a convenient way to keep local times synchronized around the world. The bias towards a local time first makes it difficult to imagine the reality of the world around us.

What I’m attempting to fix is the bias either way. Rather than making a global time and sticking with that opposite bias (and all of the inherent problems associated with picking the opposite extreme), I’m attempting to use the global time as an absolute reference, while using the design of how that global time is represented, towards favoring the natural local rhythms of Earth’s cycles.

My hope is that this balanced holistic view of time notation will simultaneously lead people to be more aware of their natural relative connection with the Earth’s cycles of night and day, and well as a global view of humans living on the planet in a complex dynamic web of ecosystems.

## Example Clockface & Notation Cheatsheet

![Earth Time Clockface](images/EarthTime-Clockface.jpg)

<details>
<summary>Dropdown for 'Earth Time Notation Cheatsheet'</summary>

Name | Notation | Example | Explanation
--- | --- | --- | ---
Global Time | `@` | `@045` or `@45` | The number of beats since midnight ETO
Day | `:` | `:005` or `:5` | The number of days after the SS containing day ETO
Year | `!` | `!2015` | The number of solar years since Christ’s birth ETO
Smaller Beat Denominations | `.` | `@045.27` or `@45.27` | Denotes infinitely smaller denominations of beats
Midnight | `*` | `*837` | The relative midnight (in beats) based on your location from ETO
Sunrise | `^` | `^109` | The relative sunrise (in beats) based on your location from ETO
Midday | `#` | `#337` | The relative midday (in beats) based on your location from ETO
Sunset | `-` | `-560` | The relative sunset (in beats) based on your location from ETO
Wake Time | `{` | `{123` | The global time you wake up
Bed Time | `}` | `}159` | The global time you go to bed
Southern Solstice | `ss` | `ss` = `:0` in `!2015` | The moment when the sun is at the most southern point in relation to Earth (represented in days). The first day of Winter in the northern hemisphere.
Mid-Southern Solstice | `mss` | `mss` = `:46` in `!2015` | The halfway point between the southern solstice and northward equinox (represented in days)
Northward Equinox | `ne` | `ne` = `:91` in `!2015` | When the sun is travelling northward and crosses the equator (represented in days) The first day of Spring in the northern hemisphere.
Mid-Northward Equinox | `mne` | `mne` = `:137` in `!2015` | The halfway point between the northward equinox and northern solstice (represented in days)
Northern Solstice | `ns` | `ms` = `:182` in `!2015` | The moment when the sun is at the most northern point in relation to Earth (represented in days) The first day of Summer in the northern hemisphere.
Mid-Northern Solstice | `mns` | `mns` = `:228` in `!2015` | The halfway point between the northern solstice and southward equinox (represented in days)
Southward Equinox | `se` | `se` = `:274` in `!2015` | When the sun is traveling southward and crosses the equator (represented in days) The first day of Autumn in the northern hemisphere.
Mid-Southward Equinox | `mse` | `mse` = `:319` in `!2015` | The halfway point between the southward equinox and southern solstice (represented in days)
Relative Time Mark | `\|` | `^\|@52\|`<br>`\|@20\|@`<br>`:\|:30\|`<br>`\|:19\|mss`<br>`@\|!1:15@32\|`<br>`:159\|:5\|` | 52 beats after sunrise<br>20 beats before current time<br>30 days after current day<br>19 days before mid-southern solstice<br>1 year, 15 days, 32 beats from now<br>5 days after my birthday (the 159th day)
Absolute Time | | `!2015:287@008` | Year: 2015<br>Day: 287<br>Beat: 008
Time Duration | `%` | `@53%`<br>`:16%`<br>`!12%`<br>`!27:157%` | 53 beats long<br>16 days long<br>12 years long<br>My current age

</details>

### Time Read From Solar Events

Each day is a fluctuating cycle of sunsight and sunclipse. Due to the necessarily imperfect orbit of Earth around the Sun, the length of each day is approximately 24 hours in length, with a margin of error of ~1 second. This error compounds to an approximate 30-500 second difference every year, depending on the year. Such fluctuations wreak havoc on our rigid Gregorian calendar with its unmoving day-length, which was originally based on convenient averages ([Wikipedia](https://en.wikipedia.org/wiki/Gregorian_calendar#Accuracy)). Adjustments such as the leap year, and unnatural delineations keep the system going, but are really just patches to an already non-optimal system.

#### Earth Time Influences

Earth Time takes cues from the [French Decimal](https://en.wikipedia.org/wiki/Decimal_time) system, as well as the [Internet Swatch Time](https://en.wikipedia.org/wiki/Swatch_Internet_Time) system, primarily focusing on a simpler to comprehend base ten segregation of time. Each day is broken into 1000 "beats" (denoted by a preceding `@` symbol i.e. `@1000`), which is then broken into as many smaller denominations as required, such as decibeats (.1), centibeats (.01), millibeats (.001), and so on.

Because each day inherently differs in length, rather than lasting an exact 1440 minutes (or a clean 86400 seconds), the length of each beat fluctuates in absolute value on a day-to-day basis to evenly divide the exact number of seconds actually occurring within that day into 1000 even beats. This inherently means that, in actuality, the beat unit denotes different amounts of time based on the current cycles that the Earth presents. The length of 1 beat fluctuates on a day to day basis, unlike a single minute which is the same amount of time regardless of length of day.

The issue of maintaining an accurate measurement of time on a day-to-day basis is solved by using the SI standard of time, the second, as its base conversion point. This constant acts as an absolute anchor with which the relative time can be based. Specifically, the UNIX standard of time, with its limitless non-cyclical accounting of time, acts as an absolute value in time throughout the foreseeable future history. Each second, because there is no upward limit, acts as a specific marker in time. Any date, down to the second, can be derived from the single standardized string of characters that represent UNIX time.

#### Global Solar Events (GSE)

Having such a fine resolution non-cyclical absolute time allows us to accurately account for the length of time world-wide absolute events occur. The list of these world-wide events is not long, and act as the basis of marking major events. They are as follows:

Global Solar Event | Notation | Explanation
--- | --- | ---
Southern Solstice | `ss` | The moment when the sun is at the most southern point in relation to Earth
Northward Equinox | `ne` | When the sun in traveling northward and crosses the equator
Northern Solstice | `ns` | When the sun is at the most northern point in relation to Earth
Southward Equinox | `se` | When the sun is traveling southward and crosses the equator

Note the neutral references to sun location, rather than seasonal interpretations. Because these are global solar events (GSEs) that the entire earth experiences at once, referring to them in relative locational terms would defeat the purpose of a global Earth reckoning of time.

Because the majority of the earth marks each new year as occurring somewhere around the Southern Solstice `ss` (~Dec. 21), the Earth Time New Year occurs during the UNIX time second that the Southern Solstice global solar event occurs. The length of the year is demarcated by the exact time (in UNIX seconds) that it takes for the earth to complete one entire orbit around the sun, returning to its cyclical moment of the next Southern Solstice. Each year differs in length by any number of seconds, but because the length of each beat is dynamically flexible, based on the absolute value of seconds, no problems arise (such as leap year) that require manual patching for consistency.

The remaining three global solar events, `ne`, `ns`, and `se`, respectively, are calculated out and UNIX values are assigned to their events. These events mark the beginnings of the relative seasons in each hemisphere, and will continue to do so the Earth Time as well. However, the events themselves will officially be referred to as their global names rather than their local seasons. “When is the first day of Autumn?” “It starts on Southward Equinox.”

Because each global solar event has a pre-calculated occurrence, the exact amount of UNIX time between each event is known and can be used to assign relative Earth Time units to denote their occurrence. Each global solar event fluctuates in small margins from year to year, so each global solar event is accurately calculated out from the actual event occurrence, rather than its lower resolution day. However, for convenience sake, the day that contains the global solar event does become the container that the event is referred to. `ss` becomes `:0`, `ne` becomes ~`:91`, `ns` is ~`:182`, and the `se` is ~`:274`, based on the actual alignment of the earth that year.

Breaking up the year into its four global solar events, while acting as a sort of constant reference to the position of the earth around the sun, is so large a resolution that it becomes not useful in day to day life. Especially since we are currently used to a 12 month Gregorian calendar, where each month is approximately 30 days long. This makes earth Earth Time “month” approximately three months long. While doable, it is not efficient for making the adjustment from the Gregorian calendar system to the Earth Time system. Because of this problem, some simple division can be employed to mark relative times between the absolute global solar events.

By dividing the relative UNIX seconds between each global solar event in half, we are given faux-absolute events that occur exactly halfway between each global solar event, arbitrarily creating four new global events to complement the naturally occurring global solar events. (It occurs to me that each global solar event could be divided into three equal parts, effectively creating an exact equivalent of Gregorian calendar’s months, but this has not yet been explored.) Each one is given a neutral name that denotes the sun’s position in relation to the earth. For example:

Global Solar Event | Name | Day of The Year
--- | --- | ---
Southern Solstice | `ss` | `:0`
Mid-Southern Solstice | `mss` | ~`:46`
Northward Equinox | `ne` | ~`:91`
Mid-Northward Equinox | `mne` | ~`:137`
Northern Solstice | `ns` | ~`:182`
Mid-Northern Solstice | `mns` | ~`:228`
Southward Equinox | `se` | ~`:274`
Mid-Southward Equinox | `mse` | ~`:319`

This level of detail arbitrarily breaks down the entirety of the year into eight ~46 day-long events. A more useful scale for chunking, and still simple enough to not complicate the amount of detail needed to represent the current relative time throughout the year. As before, each event is represented by the containing day in which the event occurs.

#### Local Solar Events (LSE)

At this point, as we transition out of dates into the smaller resolution of time, it becomes important to note that events occur at a fixed moment in time, rather than arbitrarily filling up pre-defined blocks of time. For example, the “First Day Of Summer” is, in actuality, the day that contains the global solar event of the Northern Solstice if you’re currently living in the northern hemisphere. So such events should, for sake of clarity and understanding, be referred to as moments in time, rather than filling up man-made pre-defined days. I have no problem with devoting an entire day (or whatever arbitrary length of time) to celebration of any given event, but the event itself occurs at a specific time, and that specific UNIX second is the unit in which that event officially occurs.

Essentially, this simultaneously fosters a global acceptance that events occur at one specific time world-wide, as well as allowing people to celebrate that event during the start and finish of whatever container they wish to wrap around that specific event. It fosters an absolute understanding as well as a cultural or individual freedom to choose how to react. Trust of people based on absolute facts.

The concept of what denotes the most apparent part of the calendar, the day, is different than what is currently done, and requires something of a paradigm shift. Though, it makes sense once the rationale is explained.

If the four global solar events (the quarterly position of the earth in its orbit around the sun) are the measurement of the year, then using the rotation of the earth in relation to the sun as the measurement of the day makes most sense. However, the way we currently measure time is not based on the exact rotation of the earth, but rather a convenient simplification based on acceptance of the UTC and its mostly nonsensical political breakdown of timezones. While more useful than any other time accounting system in recorded history, it leaves much to be desired.

#### Night & Day

Looking to nature again, we find two events that we as humans understand as actually separating one day from the other. The beginning of night and the beginning of day, or sunrise and sunset. These two events, while not _global_ solar events, are still solar events on a local scale. This makes a distinction between two kinds of solar events. Global solar events (GSE), which the whole world experiences at once, and is used to calculate the cycle of the year. And the "local solar events" (LSE), which only a portion of the world experiences at a time relative to the earth’s current rotation in relation to the sun.

These two kinds of solar events act as absolute values within their respective global or local cycles. The important distinction to be made here is that both occur in parallel to each other, and influence each other, but they are two separate systems. Days are not a smaller increment of years. The number of times the earth spins on its local axis is not connected to the amount of time it takes for the earth to orbit around the sun. While the two rates are nearly fixed constants, making them seem to be causal, they are in fact correlational, and fluctuate in number of absolute seconds UNIX from cycle to cycle. This is the real paradigm shift in understanding the rationale behind the nature of distinguishing between the GSE and LSE as the two individual but interconnected systems for reckoning the holistic nature of Earth Time.

The interesting difference in nature between the two kinds of solar events is that while GSEs have four nearly equal ratios between events, all of which are relatively easy to calculate (`ss`, `ne`, `ns`, `se`), with LSEs we aren’t so lucky.

LSEs only have two easily measurable events, sunrise and sunset, neither of which are absolute times with which the start of the day can be pegged to, considering that the length of daylight is different depending on the relative location of the sun in its global cycle. Instead some relative math needs to be done to find the halfway points between the calculable sunrise and sunset.

Because the LSEs are given unique timestamps in UNIX time, we assign an official arbitrary "local event" (LE) to the two halfway points between the respective LSEs. The distinction here is the difference between absolute facts such as the exact starting time of Nautical Twilight (LSE) vs. times added for convenience based on those solar events i.e. Midnight (LE) is the calculated halfway point between Sunclipse and Sunsight.

This gives us four distinct times each day-cycle against which all other daily times are calculated. They are:

Local Solar Event | Notation | Explanation | Time
--- | --- | --- | ---
Midnight | `*` | The arbitrary LE occurring halfway between the previous sunset and the upcoming sunrise | This becomes the start of a new day cycle, becoming `@000`
Sunrise | `^` | The absolute LSE of when the sun is 18 degrees above the eastern horizon. | The absolute `@time` fluctuates based on time of the year
Midday | `#` | The arbitrary LE occurring halfway between the current day’s sunrise and upcoming sunset. | In relation to the opposing midnight, this occurs `@500`<br><br>There can be very small fluctuations in this number, but they are often very minor and occur simply because of the sine wave nature of the yearly cycle. The largest fluctuations occur around the mid-solar events, as those are the times with the greatest change in relative daylight. The effects are more pronounced the closer the physical location to the poles
Sunset | `-` | The absolute LSE of when the sun remains 18 degrees above the western horizon. | The absolute `@time` fluctuates based on time of year

#### Relative Local Solar Events

In accordance with the goals of Earth Time, which is to first create an absolute global time, and then make it understood and relatable to the natural rhythms of the earth second, but in a balanced way, this clean demarcation of time only works for one physical location on the planet. All other local times are relative based off of that location.

The location where time “originates” (Earth Time’s equivalent to the UTC -000 in Greenwich village), is the **Pacific Pole of Inaccessibility** ([48°52.6′S 123°23.6′W](https://goo.gl/maps/uLKnKCU5Zrw)). This is the single point on earth furthest from any land mass. At approximately 1600 miles from any land mass, this is the furthest point from any political party, removing any potential superiority that living close to the origin of time could foster. It is the most neutral physical location on Earth.

All times, then, are calculated based on the global time which originates from this point. Rather than using politically arbitrary timezones to shift the amount of time from the UTC time origin, the Earth Time shifting is based on the exact location relative to the Origin.

To be a little less abstract, because every point on earth has different times for sunrise and sunset, which are used to calculate the start of each day, then the start of each day changes based on your exact location on the planet. Earth Time’s goals dictate that we should be using a global time to mark absolute times, but that also foster the natural cycles of the earth’s cycles.

As such, the origin simply exists to give the Local Solar events a kind of cyclical measuring stick, and how those measurements are interpreted is entirely dependent on the current location in which you currently stand.

For example, while `@000` marks midnight at the point of origin, `@000` means something completely different in another location. In Austin, TX., midnight occurs `@837`, and by extension, midday occurs `@337`. These times are constants based on the exact location of Austin, and therefore the residents of Austin would adapt all local times around the cyclical local events of the sun. They would simply be referring to those local events in the global terminology but understanding the relative nature of what that global time means to them personally.

The benefits of using a global time to refer to local events are numerous, but most tangibly is the immediate benefit of never needing to coordinate global communication across timezones. Every person that refers to a specific time (`@178` for example) is referring to it in a global context. It is `@178` for everyone at the same time, world-wide. In our internet fueled society, this is becoming increasingly more important. Gone are the days when global businesses and deployed military were the only ones that needed to coordinate global communication. Care must still be taken to coordinate meetings that are within waking hours of other locations around the world, but one barrier is removed.

Let’s look at the clock face and see how these global times are represented to be understood quickly and simply, no matter your location on the earth. This is only one example of how to place emphasis on local pertinent time, while still using global values to notate the time.

## Clock-face Breakdown
![Earth Time Clockface](images/EarthTime-Clockface.jpg)

In this example, the clock-face has been loaded with as much information as possible. It's a little overwhelming at first, but becomes easier to understand as familiarity with the notation increases. Clock-faces can be simplified to any level of detail desired.

Information has been sized and colored to note the most important information first. Starting from the inner circle first, working our way outward to the outermost ring:

### Inner Circle

The grey inner circle, the clock-face, has all of the required information needed to tell the exact time, all written in the language script.

The current global time `@889` is the most prevalent feature. If simplified, this would be the most basic requirement to tell time. It’s what you’ll tell most people when they ask what time it is.

Just beneath the global time is the relative time string. This is what makes the `@time` make sense in relation to the current location. The format denotes how many beats have passed since the previous local event, and how many beats until the next major local event.

In this example, `*|@52|@225|^` means “52 beats have passed since midnight, and there are 225 beats until sunrise”.

The top pair of strings above the global time is the yearly cycle represented as year followed by days since the most recent southern solstice.

In this example, `!2015:328` means “328 days have passed since the 2015th southern solstice after Christ’s birth”.

Just below that is the relative string that helps give context to the large number of days contained within each year.

In this example, `mse|:8|:37|ss` means “8 days have passed since mid-southward equinox, and there are 37 days until next southern solstice”.

In the bottom of the inner circle is the nearest recognizable city to your current location so as to properly calculate the sunrise/sunset and time offset from Origin.

Just below the name of the city is the consonant string that represents the global position
In this example, the string `fvtgxpz` represents a location with the size of a large shopping mall, half a square mile. In reality, this resolution is much finer than necessary for an acceptable level of detail.

The resolution needed to represent the sun’s position, with enough accuracy that there aren’t large discrepancies between different “timezones” but also can hide exact positions of people would either be triangles the size of Kentucky `fvt`, or triangles the size of Rhode Island `fvtg`. I’m sure the resolution of 3 divisions is sufficient.

The scheme I’m using to denote exact locations is an area of measurement based on dividing the surface of the earth into smaller and smaller equilateral triangles, and is outside of the scope of this explanation. For the curious, you can read the documentation for Triegions [here](https://docs.google.com/document/d/1hgGa0-CQazAhI1en_uze578tIpqnIyYvHelx7AZYvR8/edit?usp=sharing).

* The inner ring visually represents the information provided by the daily local cycle.
* The ring is divided into 10 equal sections, each representing 100 beats (@100%).
* The red tic mark represents `@000`
* The ring is rotated so that local midnight is at the very bottom of the circle.
* In this example, `*837` is the local time for midnight, so the red tic mark which represents `@000` is rotated relative to that.
* At the top of the ring is midday, the halfway point between the sunrise and sunset.
* In this case, `#337`. Or more accurately, `*|@500|`.
* The two other times notated by the `^` and `-` symbols represent sunrise and sunset, respectively.
* In this example, ^109 means that sunrise occurs `@109`, and `-560` means that sunset occurs `@560` locally.
* The white circle with the `@` symbol inside of it is a visual representation of the current global time.
* While the numbers are not written on the clockface, the `@` symbol represents the current time, which in this case is `@889`.
* The color of the inner ring represents the amount of sunlight visible at that point in time relative your location.
* The outer ring represents the global yearly cycle, independent of the local daily cycle.
* The ring is divided into 8 equal parts, with each tic mark representing one of the eight global events.
* The bottom of the circle represents the southern solstice, or `:0` days.
* Each tic mark after that is the relative number of days since the southern solstice.
* The white circle with the `:` symbol in it is the current day, represented visually.
