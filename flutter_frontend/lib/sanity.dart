import 'package:flutter_sanity/flutter_sanity.dart';
import 'dart:convert' as convert;

import 'package:http/http.dart' as http;
import 'package:flutter_dotenv/flutter_dotenv.dart';

var url = Uri.https('${dotenv.env['SANITY_PROJECTID']}.api.sanity.io',
    '/v2021-06-07/data/query/${dotenv.env['SANITY_DATASET']}', {
  'query': '*[_type == "blog"]',
});

Future<dynamic> getSanityData() async {
  await dotenv.load(fileName: ".env");
  var response = await http.get(url);
  if (response.statusCode == 200) {
    var jsonResponse =
        convert.jsonDecode(response.body) as Map<String, dynamic>;
    // var itemCount = jsonResponse['totalItems'];
    return jsonResponse['result'];
  } else {
    throw ('Request failed with status: ${response.statusCode}.');
  }
}

//Alternative method to get sanity data not prefferable
// Future<dynamic> getSanityData() {
//   final sanityClient = SanityClient(
//     dataset: 'production',
//     projectId: 'o4n0mzsh',
//     useCdn: false,
//   );
//   try {
//     final response = sanityClient.fetch('*[_type=="blog"]');
//     return response;
//   } catch (error) {
//     throw error;
//   }
// }
