import React ,{Component}from 'react';
import Timeline,{ TimelineHeaders, SidebarHeader, DateHeader }  from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import generateFakeData from "./generate-fake-data";
import moment from 'moment'

var keys = {
    groupIdKey: "id",
    groupTitleKey: "title",
    groupRightTitleKey: "rightTitle",
    itemIdKey: "id",
    itemTitleKey: "title",
    itemDivTitleKey: "title",
    itemGroupKey: "group",
    itemTimeStartKey: "start",
    itemTimeEndKey: "end",
    groupLabelKey: "title"
  };
 
class TimeLine extends Component{
    
    constructor(props) {
        super(props);
    
        const { groups, items } = generateFakeData();
        const defaultTimeStart = moment()
          .startOf("day")
          .toDate();
        const defaultTimeEnd = moment()
          .startOf("day")
          .add(1, "day")
          .toDate();
    
        this.state = {
          groups,
          items,
          defaultTimeStart,
          defaultTimeEnd
        };
      }
    render(){
        const { groups, items, defaultTimeStart, defaultTimeEnd } = this.state;

        return (
          <Timeline
            groups={groups}
            items={items}
            keys={keys}
            rightSidebarWidth={150}
            rightSidebarContent={<div>Above The Right</div>}
            sidebarContent={<div>Above The Left</div>}
            itemsSorted
            itemTouchSendsClick={false}
            stackItems
            itemHeightRatio={0.75}
            showCursorLine
            canMove={false}
            canResize={false}
            defaultTimeStart={defaultTimeStart}
            defaultTimeEnd={defaultTimeEnd}
          >
            <TimelineHeaders>
              <SidebarHeader>
                {({ getRootProps }) => {
                  return <div {...getRootProps()}>Above The Left</div>;
                }}
              </SidebarHeader>
              <DateHeader unit="primaryUnit" />
              <DateHeader />
            </TimelineHeaders>
          </Timeline>
        );
      }
    }

export default TimeLine;       
