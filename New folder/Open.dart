import 'package:flutter/material.dart';

class Open extends StatefulWidget {
  @override
  _OpenState createState() => _OpenState();
}

class _OpenState extends State<Open> {

  String UserName, UserOccupaion;
  double UserWeigth, UserTime;

  getUserName(name){
    this.UserName = name;
  }

  getUserOccupation(occupation){
    this.UserOccupaion = occupation;
  }

  getUserWeigth(weigth){
    this.UserWeigth = weigth;
  }

  getUserTime(time){
    this.UserTime = time;
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Mine",style:TextStyle(color: Colors.black)),
        backgroundColor: Colors.lightBlue,
      ),
      body: Padding(
          padding: EdgeInsets.all(16.0),
        child:Column(
          children:<Widget>[
            Padding(
              padding: EdgeInsets.all(8.0),
              child: TextField(
                decoration: InputDecoration(
                  labelText: "Name",
                  fillColor: Colors.white,
                  focusedBorder: OutlineInputBorder(
                    borderSide: BorderSide(
                      color: Colors.lightBlue, width: 2.0
                    ),
                  ),
                ),
                onChanged: (String name){
                  getUserName(name);
                },
              ),
            ),
            Padding(
              padding: EdgeInsets.all(8.0),
              child: TextField(
                decoration: InputDecoration(
                  labelText: "Occupation",
                  fillColor: Colors.white,
                  focusedBorder: OutlineInputBorder(
                    borderSide: BorderSide(
                        color: Colors.lightBlue, width: 2.0
                    ),
                  ),
                ),
                onChanged: (String occupation){
                  getUserOccupation(occupation);
                },
              ),
            ),
            Padding(
              padding: EdgeInsets.all(8.0),
              child: TextField(
                decoration: InputDecoration(
                  labelText: "Weigth",
                  fillColor: Colors.white,
                  focusedBorder: OutlineInputBorder(
                    borderSide: BorderSide(
                        color: Colors.lightBlue, width: 2.0
                    ),
                  ),
                ),
                onChanged: (String weigth){
                  getUserWeigth(weigth);
                },
              ),
            ),
            Padding(
              padding: EdgeInsets.all(8.0),
              child: TextField(
                decoration: InputDecoration(
                  labelText: "Daily Workout time",
                  fillColor: Colors.white,
                  focusedBorder: OutlineInputBorder(
                    borderSide: BorderSide(
                        color: Colors.lightBlue, width: 2.0
                    ),
                  ),
                ),
                onChanged: (String time){
                  getUserTime(time);
                },
              ),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                RaisedButton(
                    child: Text("create"),
                    onPressed: null,
                    shape:RoundedRectangleBorder(
                        borderRadius:BorderRadius.circular(8)
                    )),
                RaisedButton(
                    child: Text("read"),
                    onPressed: null,
                    shape:RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8)
                )),
                RaisedButton(
                    child: Text("update"),
                    onPressed: null,
                    shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8)
                ),),
                RaisedButton(
                    child: Text("delete"),
                    onPressed: null,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8)
                  ),),
              ],
            )
          ]
        ),
      ),
    );
  }
}