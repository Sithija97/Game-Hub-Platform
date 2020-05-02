import 'package:flutter/material.dart';
import 'mainscreen.dart';

void main() => runApp(Home());

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      title: "Water-Monitor",
      theme: ThemeData(
        primarySwatch: Colors.cyan
      ),
      home:MainScreen(),
    );
  }
}
