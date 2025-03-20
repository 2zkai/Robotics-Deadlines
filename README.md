# Robotics-Deadlines

[![LICENSE](https://img.shields.io/github/license/your-username/robotics-deadlines)](https://github.com/your-username/robotics-deadlines/blob/main/LICENSE)

English | [简体中文](./README.zh-CN.md)

Help robotics researchers track deadlines of major robotics conferences.

<table>
  <tr>
    <td align="center"><b><a href="https://your-username.github.io/robotics-deadlines/">Website Preview<br>(Main Site)</a></b></td>
  </tr>
  <tr>
    <td align="center"><img src=".readme_assets/screenshot_website.png" width="280px"/></td>
  </tr>
</table>

**No More Finding and Time Conversion on Your Own!**

## iCal Subscription:

- English: `https://your-domain.com/conference/deadlines_en.ics`
- 简体中文: `https://your-domain.com/conference/deadlines_zh.ics`

<img src=".readme_assets/screenshot_iCal.jpg" width="500px"/>

## Add/Update a conference

Contributions are welcomed and greatly appreciated!

To add or update information:

- Fork the repo
- Add/Update the yml file of conference/conf_type/conf_name.yml
- Send a [pull request](https://github.com/your-username/robotics-deadlines/pulls)

## Conference Entry File
Example file: conference/ROBO/icra.yml

```yaml
- title: ICRA
  description: IEEE International Conference on Robotics and Automation
  sub: ROBO
  rank:
    ccf: A
    core: A*
    thcpl: A
  dblp: icra
  confs:
    - year: 2024
      id: icra24
      link: https://2024.ieee-icra.org/
      timeline:
        - abstract_deadline: '2023-09-15 23:59:00'
          deadline: '2023-09-22 23:59:00'
      timezone: UTC-12
      date: May 13-17, 2024
      place: Yokohama, Japan
```

Description of the fields:
<table>
   <tr>
      <th colspan="3">Field name</th>
      <th>Description</th>
   </tr>
   <tr>
      <td colspan="3"><code>title</code>*</td>
      <td>Short conference name, without year, uppercase</td>
   </tr>
   <tr>
      <td colspan="3"><code>description</code>*</td>
      <td>Description, or long name, with no session</td>
   </tr>
   <tr>
      <td colspan="3"><code>sub</code>*</td>
      <td>The category of the conference. See the matching table below</td>
   </tr>
   <tr>
      <td rowspan="3"><code>rank</code>*</td>
      <td colspan="2"><code>ccf</code>*</td>
      <td>The tier of the conference, e.g., <code>A</code>, <code>B</code>, <code>C</code>, <code>N</code></td>
   </tr>
   <tr>
   <td colspan="2"><code>core</code></td>
   <td>The level that the conference is ranked by CORE, e.g., <code>A*</code>, <code>A</code>, <code>B</code>, <code>C</code>, <code>N</code></td>
   </tr>
   <tr>
   <td colspan="2"><code>thcpl</code></td>
   <td>The level that the conference is ranked by TH-CPL, e.g., <code>A</code>, <code>B</code>, <code>N</code></td>
   </tr>
   <tr>
      <td colspan="3"><code>dblp</code>*</td>
      <td>The suffix in dblp url, e.g., <code>icra</code> in https://dblp.uni-trier.de/db/conf/icra</td>
   </tr>
   <tr>
      <td rowspan="9"><code>confs</code></td>
      <td colspan="2"><code>year</code>*</td>
      <td>Year the conference is happening</td>
   </tr>
   <tr>
      <td colspan="2"><code>id</code>*</td>
      <td>conference name & year, lowercase</td>
   </tr>
   <tr>
      <td colspan="2"><code>link</code>*</td>
      <td>URL to the conference home page</td>
   </tr>
   <tr>
      <td rowspan="3"><code>timeline</code>*</td>
      <td><code>abstract_deadline</code></td>
      <td>Abstract deadline if applicable, optional</td>
   </tr>
   <tr>
      <td><code>deadline</code>*</td>
      <td>Deadline, in the format of <code>yyyy-mm-dd hh:mm:ss</code> or <code>TBD</code></td>
   </tr>
   <tr>
      <td><code>comment</code></td>
      <td>Some comments on the conference, optional</td>
   </tr>
   <tr>
      <td colspan="2"><code>timezone</code>*</td>
      <td>Timezone of deadline, currently support <code>UTC-12</code> ~ <code>UTC+12</code> & <code>AoE</code></td>
   </tr>
   <tr>
      <td colspan="2"><code>date</code>*</td>
      <td>When the main conference is happening, e.g., Mar 12-16, 2021</td>
   </tr>
   <tr>
      <td colspan="2"><code>place</code>*</td>
      <td>Where the main conference is happening, e.g., <code>city, country</code></td>
   </tr>
</table>

Fields marked with asterisk (*) are required.

The matching table:

| `sub` | Category name                                           |
| ----- | ------------------------------------------------------- |
| `ROBO`| Robotics                                                |
| `AI`  | Artificial Intelligence and Machine Learning            |
| `CV`  | Computer Vision                                         |
| `CTRL`| Control Systems                                         |
| `NAV` | Navigation and Localization                             |
| `AD`  | Autonomous Driving                                      |
| `MANIP`| Robot Manipulation and Grasping                        |
| `HRI` | Human-Robot Interaction                                 |

## License

Licensed under MIT License.
