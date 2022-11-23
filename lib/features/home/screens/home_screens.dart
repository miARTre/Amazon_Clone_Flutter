import 'package:flu/providers/user.provider.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class HomeScreenState extends StatefulWidget {
  const HomeScreenState({Key? key}) : super(key: key);

  @override
  State<HomeScreenState> createState() => _HomeScreenStateState();
}

class _HomeScreenStateState extends State<HomeScreenState> {
  @override
  Widget build(BuildContext context) {
    final user = Provider.of<UserProvider>(context).user;

    return Scaffold(
      body: Center(
        child: Text(
          user.toJson(),
        ),
      ),
    );
  }
}
