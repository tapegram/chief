// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Locations" titleTo="locations" buttonLabel="New Location" buttonTo="newLocation">
        <Route path="/locations/new" page={LocationNewLocationPage} name="newLocation" />
        <Route path="/locations/{id:Int}/edit" page={LocationEditLocationPage} name="editLocation" />
        <Route path="/locations/{id:Int}" page={LocationLocationPage} name="location" />
        <Route path="/locations" page={LocationLocationsPage} name="locations" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Rotations" titleTo="rotations" buttonLabel="New Rotation" buttonTo="newRotation">
        <Route path="/rotations/new" page={RotationNewRotationPage} name="newRotation" />
        <Route path="/rotations/{id:Int}/edit" page={RotationEditRotationPage} name="editRotation" />
        <Route path="/rotations/{id:Int}" page={RotationRotationPage} name="rotation" />
        <Route path="/rotations" page={RotationRotationsPage} name="rotations" />
      </Set>
      <Set wrap={ScaffoldLayout} title="TrackAssignments" titleTo="trackAssignments" buttonLabel="New TrackAssignment" buttonTo="newTrackAssignment">
        <Route path="/track-assignments/new" page={TrackAssignmentNewTrackAssignmentPage} name="newTrackAssignment" />
        <Route path="/track-assignments/{id:Int}/edit" page={TrackAssignmentEditTrackAssignmentPage} name="editTrackAssignment" />
        <Route path="/track-assignments/{id:Int}" page={TrackAssignmentTrackAssignmentPage} name="trackAssignment" />
        <Route path="/track-assignments" page={TrackAssignmentTrackAssignmentsPage} name="trackAssignments" />
      </Set>
      <Set wrap={ScaffoldLayout} title="TrackRotations" titleTo="trackRotations" buttonLabel="New TrackRotation" buttonTo="newTrackRotation">
        <Route path="/track-rotations/new" page={TrackRotationNewTrackRotationPage} name="newTrackRotation" />
        <Route path="/track-rotations/{id:Int}/edit" page={TrackRotationEditTrackRotationPage} name="editTrackRotation" />
        <Route path="/track-rotations/{id:Int}" page={TrackRotationTrackRotationPage} name="trackRotation" />
        <Route path="/track-rotations" page={TrackRotationTrackRotationsPage} name="trackRotations" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Tracks" titleTo="tracks" buttonLabel="New Track" buttonTo="newTrack">
        <Route path="/tracks/new" page={TrackNewTrackPage} name="newTrack" />
        <Route path="/tracks/{id:Int}/edit" page={TrackEditTrackPage} name="editTrack" />
        <Route path="/tracks/{id:Int}" page={TrackTrackPage} name="track" />
        <Route path="/tracks" page={TrackTracksPage} name="tracks" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Residents" titleTo="residents" buttonLabel="New Resident" buttonTo="newResident">
        <Route path="/residents/new" page={ResidentNewResidentPage} name="newResident" />
        <Route path="/residents/{id:Int}/edit" page={ResidentEditResidentPage} name="editResident" />
        <Route path="/residents/{id:Int}" page={ResidentResidentPage} name="resident" />
        <Route path="/residents" page={ResidentResidentsPage} name="residents" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Schedules" titleTo="schedules" buttonLabel="New Schedule" buttonTo="newSchedule">
        <Route path="/schedules/new" page={ScheduleNewSchedulePage} name="newSchedule" />
        <Route path="/schedules/{id:Int}/edit" page={ScheduleEditSchedulePage} name="editSchedule" />
        <Route path="/schedules/{id:Int}" page={ScheduleSchedulePage} name="schedule" />
        <Route path="/schedules" page={ScheduleSchedulesPage} name="schedules" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
