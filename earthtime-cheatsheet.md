## Earth Time Notation Cheatsheet

![Earth Time Clockface](images/EarthTime-Clockface.jpg)

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
