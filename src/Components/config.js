const Config = {
	ROSBRIDGE_SERVER_IP : "localhost",
	ROSBRIDGE_SERVER_PORT : "9090",
	RECONNECTION_TIMER : 1000, // 1s
	CMD_VEL_TOPIC : "/turtle1/cmd_vel",
	ODOM_TOPIC : "/odom"
};

export default Config;