!function(e){try{e=angular.module("ionic-datepicker.templates")}catch(t){e=angular.module("ionic-datepicker.templates",[])}e.run(["$templateCache",function(e){e.put("date-picker-modal.html",'<div class="row row-center no_padding"><div class="col col-10"><a class="button button-icon ion-chevron-left" ng-click=prevMonth() ng-class="{\'pointer_events_none\': !prevMonthAllowed()}"></a></div><div class="col col-80 text-center"><b>{{datePicker.date | date: \'MMMM - yyyy\' }}</b></div><div class="col col-10"><a class="button button-icon ion-chevron-right" ng-click=nextMonth() ng-class="{\'pointer_events_none\': !nextMonthAllowed()}"></a></div></div><div><div class="row no_padding"><div class=col ng-repeat="weekName in datePicker.weekNames track by $index" style="font-weight: bold">{{ weekName | limitTo : 2 }}</div></div><div><div class=row ng-repeat="week in datePicker.weeks track by $index" style="text-align: center;"><div class="col no_padding" ng-repeat="day in week track by $index" ng-class="{\'date_col\': day != null, \'date_selected\': isSelected(day), \'today\' : isToday(day)}"><div class=date_cell ng-click=selectDate(day) ng-class="{\'pointer_events_none\' : !dayAllowed(day)}">{{ day | date: \'dd\' }}</div></div></div></div></div>')}])}();